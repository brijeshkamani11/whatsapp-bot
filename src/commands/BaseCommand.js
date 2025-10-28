/**
 * Base class for all commands
 * Extend this to create new commands easily
 */
class BaseCommand {
  constructor(name, description, usage = '') {
    this.name = name;
    this.description = description;
    this.usage = usage;
    this.aliases = [];
  }

  /**
   * Execute the command
   * @param {Object} msg - WhatsApp message object
   * @param {Object} chat - WhatsApp chat object
   * @param {Array} args - Command arguments
   * @param {Object} client - WhatsApp client
   */
  async execute(msg, chat, args, client) {
    throw new Error(`Command ${this.name} must implement execute() method`);
  }

  /**
   * Check if command matches the trigger
   */
  matches(commandName) {
    return this.name === commandName || this.aliases.includes(commandName);
  }

  /**
   * Validate command execution
   */
  canExecute(msg, chat) {
    return true; // Override for permission checks
  }
}

module.exports = BaseCommand;
