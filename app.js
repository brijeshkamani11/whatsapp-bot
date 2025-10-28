/**
 * WhatsApp Bot - Main Entry Point
 * Modular, scalable architecture with Web UI
 */

const CommandManager = require('./src/commands/CommandManager');
const WhatsAppBot = require('./src/bot/WhatsAppBot');
const WebServer = require('./src/server/WebServer');
const Logger = require('./src/utils/logger');

// Import commands
const PingCommand = require('./src/commands/PingCommand');
const BusyCommand = require('./src/commands/BusyCommand');
const SendCommand = require('./src/commands/SendCommand');
const HelpCommand = require('./src/commands/HelpCommand');

const logger = new Logger('[App] ');

// Initialize command manager
const commandManager = new CommandManager();

// Register commands
commandManager.registerAll([
  new PingCommand(),
  new BusyCommand(),
  new SendCommand()
]);

// Register help command (needs command manager reference)
commandManager.register(new HelpCommand(commandManager));

// Initialize bot
const bot = new WhatsAppBot(commandManager);
bot.initialize();

// Initialize web server
const webServer = new WebServer(bot);
webServer.start();

// Graceful shutdown
process.on('SIGINT', () => {
  logger.info('Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('Shutting down gracefully...');
  process.exit(0);
});

logger.success('🚀 WhatsApp Bot started successfully!');
