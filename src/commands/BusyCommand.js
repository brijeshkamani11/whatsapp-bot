const BaseCommand = require('./BaseCommand');
const config = require('../../config');

class BusyCommand extends BaseCommand {
  constructor() {
    super('busy', 'Send busy auto-reply', '!busy');
  }

  async execute(msg, chat, args, client) {
    await chat.sendMessage(config.templates.busy);
  }
}

module.exports = BusyCommand;
