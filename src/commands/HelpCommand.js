const BaseCommand = require('./BaseCommand');

class HelpCommand extends BaseCommand {
  constructor(commandManager) {
    super('help', 'Show available commands', '!help');
    this.commandManager = commandManager;
  }

  async execute(msg, chat, args, client) {
    const commands = this.commandManager.getAllCommands();
    
    const helpText = [
      '📋 Available Commands:',
      '',
      ...commands.map(cmd => `• !${cmd.name} → ${cmd.description}`)
    ].join('\n');

    await chat.sendMessage(helpText);
  }
}

module.exports = HelpCommand;
