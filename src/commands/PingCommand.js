const BaseCommand = require('./BaseCommand');

class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'Test bot responsiveness', '!ping');
  }

  async execute(msg, chat, args, client) {
    await chat.sendMessage('Pong ✅');
  }
}

module.exports = PingCommand;
