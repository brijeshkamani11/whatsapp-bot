const config = require('../../config');
const Logger = require('../utils/logger');

const logger = new Logger('[CommandManager] ');

class CommandManager {
  constructor() {
    this.commands = new Map();
    this.prefix = config.bot.commandPrefix;
  }

  /**
   * Register a command
   */
  register(command) {
    this.commands.set(command.name, command);
    logger.info(`Registered command: ${command.name}`);
  }

  /**
   * Register multiple commands
   */
  registerAll(commands) {
    commands.forEach(cmd => this.register(cmd));
  }

  /**
   * Get command by name
   */
  get(name) {
    return this.commands.get(name);
  }

  /**
   * Get all commands
   */
  getAllCommands() {
    return Array.from(this.commands.values());
  }

  /**
   * Parse and execute command
   */
  async execute(msg, chat, client) {
    const text = (msg.body || '').trim();
    
    if (!text.startsWith(this.prefix)) {
      return false;
    }

    const args = text.slice(this.prefix.length).trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();

    const command = this.get(commandName);
    
    if (!command) {
      logger.warning(`Unknown command: ${commandName}`);
      return false;
    }

    if (!command.canExecute(msg, chat)) {
      logger.warning(`Permission denied for command: ${commandName}`);
      return false;
    }

    try {
      const contact = await msg.getContact();
      const who = contact.pushname || msg.from;
      logger.command(`${who} → !${commandName} ${args.join(' ')}`);
      
      await command.execute(msg, chat, args, client);
      return true;
    } catch (error) {
      logger.error(`Error executing ${commandName}:`, error.message);
      await chat.sendMessage('❌ Command failed. Please try again.');
      return false;
    }
  }
}

module.exports = CommandManager;
