const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    // comment executablePath if you're on Windows native; keep if on Linux/WSL with system Chrome
    // executablePath: '/usr/bin/google-chrome-stable',
    headless: true,
    args: ['--no-sandbox','--disable-setuid-sandbox','--disable-gpu','--disable-dev-shm-usage']
  }
});

// --- BOOT ---
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('📌 Scan this QR (WhatsApp → Linked Devices → Link a device).');
});
client.on('authenticated', () => console.log('🔐 Authenticated.'));
client.on('ready', () => console.log('✅ Bot is ready and listening for messages.'));
client.on('disconnected', r => console.log('❌ Disconnected:', r));

// --- HELPERS ---
async function handleCommand(msg, text, chat) {
  const from = msg.from;              // jid
  const isGroup = chat.isGroup;
  const who = (await msg.getContact()).pushname || from;

  console.log(`↪️  Command from ${who}${isGroup ? ' [GROUP]' : ''}: ${text}`);

  // 1) Health check
  if (text === '!ping') {
    return chat.sendMessage('Pong ✅');
  }

  // 2) Quick busy
  if (text === '!busy') {
    return chat.sendMessage("I'm currently busy. Will reply soon ✅");
  }

  // 3) Approval flow
  if (text.startsWith('!send ')) {
    const replyText = text.slice('!send '.length).trim();
    if (!replyText) return chat.sendMessage('Usage: !send <message>');

    console.log(`Approve to send → "${replyText}" ? (y/n)`);
    process.stdin.resume();
    process.stdin.once('data', input => {
      const ok = input.toString().trim().toLowerCase() === 'y';
      if (ok) {
        chat.sendMessage(replyText);
        console.log('✅ Message sent!');
      } else {
        console.log('❌ Cancelled.');
      }
    });
    return;
  }

  // 4) Help
  if (text === '!help') {
    return chat.sendMessage(
      [
        'Commands:',
        '• !ping  → Pong',
        '• !busy  → Quick busy reply',
        '• !send <text> → Ask for approval, then send',
        '• !help  → This help'
      ].join('\n')
    );
  }
}

// --- EVENTS ---
// Incoming messages (others → you)
client.on('message', async (msg) => {
  const text = (msg.body || '').trim();
  console.log(`📩 INCOMING from ${msg.from}: ${text}`);
  if (!text.startsWith('!')) return;   // only commands
  const chat = await msg.getChat();
  await handleCommand(msg, text, chat);
});

// Messages you create (you → anyone, incl. Message Yourself)
client.on('message_create', async (msg) => {
  const text = (msg.body || '').trim();
  const fromMe = msg.fromMe === true;
  
  // If it's your command, intercept BEFORE it's sent
  if (fromMe && text.startsWith('!')) {
    console.log(`✍️  COMMAND INTERCEPTED: ${text}`);
    
    // Delete immediately to prevent sending
    try {
      await msg.delete(true);
      console.log('🗑️  Command prevented from sending');
    } catch (err) {
      console.log('⚠️  Could not delete:', err.message);
    }
    
    // Now execute the command
    const chat = await msg.getChat();
    await handleCommand(msg, text, chat);
    return;
  }
  
  console.log(`✍️  CREATED ${fromMe ? '(from me)' : ''} to ${msg.to || msg.from}: ${text}`);
});

client.initialize();
