const BaseCommand = require('./BaseCommand');
const Logger = require('../utils/logger');

const logger = new Logger('[SendCommand] ');

class SendCommand extends BaseCommand {
  constructor() {
    super('send', 'Send message with approval', '!send <message>');
  }

  async execute(msg, chat, args, client) {
    const replyText = args.join(' ').trim();
    
    if (!replyText) {
      await chat.sendMessage('Usage: !send <message>');
      return;
    }

    logger.info(`Approve to send → "${replyText}" ? (y/n)`);
    
    process.stdin.resume();
    process.stdin.once('data', async (input) => {
      const ok = input.toString().trim().toLowerCase() === 'y';
      if (ok) {
        await chat.sendMessage(replyText);
        logger.success('Message sent!');
      } else {
        logger.warning('Cancelled.');
      }
    });
  }
}

module.exports = SendCommand;
