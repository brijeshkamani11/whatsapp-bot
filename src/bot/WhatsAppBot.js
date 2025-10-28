const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const eventBus = require('../utils/eventBus');
const Logger = require('../utils/logger');
const config = require('../../config');

const logger = new Logger('[Bot] ');

class WhatsAppBot {
  constructor(commandManager) {
    this.commandManager = commandManager;
    this.client = null;
    this.isReady = false;
    this.chats = new Map();
    this.recentMessages = [];
  }

  /**
   * Initialize WhatsApp client
   */
  initialize() {
    logger.info('Initializing WhatsApp client...');
    
    this.client = new Client({
      authStrategy: new LocalAuth(),
      puppeteer: {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage'
        ]
      }
    });

    this._registerEvents();
    this.client.initialize();
  }

  /**
   * Register all WhatsApp events
   */
  _registerEvents() {
    this.client.on('qr', (qr) => this._handleQR(qr));
    this.client.on('authenticated', () => this._handleAuthenticated());
    this.client.on('ready', () => this._handleReady());
    this.client.on('message', (msg) => this._handleIncomingMessage(msg));
    this.client.on('message_create', (msg) => this._handleMessageCreate(msg));
    this.client.on('disconnected', (reason) => this._handleDisconnected(reason));
  }

  /**
   * Handle QR code generation
   */
  _handleQR(qr) {
    qrcode.generate(qr, { small: true });
    logger.info('📌 Scan this QR (WhatsApp → Linked Devices → Link a device).');
    eventBus.emitQR(qr);
  }

  /**
   * Handle authentication
   */
  _handleAuthenticated() {
    logger.success('🔐 Authenticated.');
    // Emit status update for UI
    eventBus.emit('status', { ready: false, authenticated: true });
  }

  /**
   * Handle bot ready state
   */
  async _handleReady() {
    this.isReady = true;
    logger.success('✅ Bot is ready and listening for messages.');
    eventBus.emitBotReady();
    
    // Load initial chats
    await this._loadChats();
  }

  /**
   * Load and cache chats
   */
  async _loadChats() {
    try {
      const chats = await this.client.getChats();
      chats.forEach(chat => {
        this.chats.set(chat.id._serialized, {
          id: chat.id._serialized,
          name: chat.name,
          isGroup: chat.isGroup,
          unreadCount: chat.unreadCount
        });
      });
      logger.info(`Loaded ${chats.length} chats`);
    } catch (error) {
      logger.error('Failed to load chats:', error.message);
    }
  }

  /**
   * Handle incoming messages (from others)
   */
  async _handleIncomingMessage(msg) {
    const text = (msg.body || '').trim();
    const contact = await msg.getContact();
    const who = contact.pushname || msg.from;
    
    logger.incoming(`from ${who}: ${text}`);

    // Store message
    this._storeMessage({
      id: msg.id._serialized,
      from: msg.from,
      fromName: who,
      body: text,
      timestamp: msg.timestamp,
      fromMe: false
    });

    // Emit to UI
    eventBus.emitMessage({
      from: msg.from,
      fromName: who,
      body: text,
      timestamp: msg.timestamp,
      fromMe: false
    });

    // Handle commands
    if (text.startsWith(config.bot.commandPrefix)) {
      const chat = await msg.getChat();
      await this.commandManager.execute(msg, chat, this.client);
    }
  }

  /**
   * Handle message creation (your messages)
   */
  async _handleMessageCreate(msg) {
    const text = (msg.body || '').trim();
    const fromMe = msg.fromMe === true;

    if (!fromMe) return;

    // If it's a command, don't send it
    if (text.startsWith(config.bot.commandPrefix)) {
      logger.command(`INTERCEPTED: ${text}`);
      
      // Delete the command message
      if (config.bot.deleteCommandMessages) {
        try {
          await msg.delete(true);
          logger.info('🗑️  Command message deleted');
        } catch (err) {
          logger.warning('Could not delete command:', err.message);
        }
      }

      // Execute command
      const chat = await msg.getChat();
      await this.commandManager.execute(msg, chat, this.client);
      return;
    }

    // Regular message from you
    logger.outgoing(`to ${msg.to || msg.from}: ${text}`);
    
    this._storeMessage({
      id: msg.id._serialized,
      from: msg.to || msg.from,
      fromName: 'You',
      body: text,
      timestamp: msg.timestamp,
      fromMe: true
    });
  }

  /**
   * Handle disconnection
   */
  _handleDisconnected(reason) {
    this.isReady = false;
    logger.error('❌ Disconnected:', reason);
    eventBus.emitBotDisconnected(reason);
  }

  /**
   * Store message in memory
   */
  _storeMessage(message) {
    this.recentMessages.push(message);
    
    // Keep only recent messages
    if (this.recentMessages.length > config.ui.maxRecentMessages) {
      this.recentMessages.shift();
    }
  }

  /**
   * Send message to a chat
   */
  async sendMessage(chatId, message) {
    if (!this.isReady) {
      logger.error('Cannot send message: Bot is not ready');
      throw new Error('Bot is not ready');
    }

    try {
      const chat = await this.client.getChatById(chatId);
      const chatName = chat.name || chatId;
      const isGroup = chat.isGroup;
      
      logger.info(`📤 SENDING: "${message}"`);
      logger.info(`   To: ${chatName} ${isGroup ? '[GROUP]' : '[PRIVATE]'}`);
      logger.info(`   Chat ID: ${chatId}`);
      
      await chat.sendMessage(message);
      
      logger.success(`✅ DELIVERED: Message sent to ${chatName}`);
      
      // Store in recent messages
      this._storeMessage({
        id: Date.now().toString(),
        from: chatId,
        fromName: chatName,
        body: message,
        timestamp: Math.floor(Date.now() / 1000),
        fromMe: true
      });
      
      return true;
    } catch (error) {
      logger.error(`❌ SEND FAILED: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get recent messages
   */
  getRecentMessages(limit = 20) {
    return this.recentMessages.slice(-limit);
  }

  /**
   * Get all chats
   */
  getAllChats() {
    return Array.from(this.chats.values());
  }

  /**
   * Get chat by ID
   */
  async getChatById(chatId) {
    return await this.client.getChatById(chatId);
  }
}

module.exports = WhatsAppBot;
