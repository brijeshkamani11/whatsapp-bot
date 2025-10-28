const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const eventBus = require('../utils/eventBus');
const Logger = require('../utils/logger');
const config = require('../../config');

const logger = new Logger('[WebServer] ');

class WebServer {
  constructor(bot) {
    this.bot = bot;
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new Server(this.server);
    
    this._setupMiddleware();
    this._setupRoutes();
    this._setupWebSocket();
    this._setupEventListeners();
  }

  /**
   * Setup Express middleware
   */
  _setupMiddleware() {
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, '../../public')));
  }

  /**
   * Setup API routes
   */
  _setupRoutes() {
    // Get bot status
    this.app.get('/api/status', (req, res) => {
      res.json({
        ready: this.bot.isReady,
        timestamp: Date.now()
      });
    });

    // Get recent messages
    this.app.get('/api/messages', (req, res) => {
      const limit = parseInt(req.query.limit) || 20;
      res.json(this.bot.getRecentMessages(limit));
    });

    // Get all chats
    this.app.get('/api/chats', (req, res) => {
      res.json(this.bot.getAllChats());
    });

    // Send message
    this.app.post('/api/send', async (req, res) => {
      const { chatId, message } = req.body;

      if (!chatId || !message) {
        logger.warning('Send message failed: Missing chatId or message');
        return res.status(400).json({ error: 'chatId and message are required' });
      }

      try {
        const chat = await this.bot.getChatById(chatId);
        const chatName = chat.name || chatId;
        
        logger.info(`📤 UI ACTION: Sending message to ${chatName}`);
        logger.info(`   Message: "${message}"`);
        
        await this.bot.sendMessage(chatId, message);
        
        logger.success(`✅ Message sent successfully to ${chatName}`);
        res.json({ success: true });
      } catch (error) {
        logger.error(`❌ Failed to send message to ${chatId}: ${error.message}`);
        res.status(500).json({ error: error.message });
      }
    });

    // Get templates
    this.app.get('/api/templates', (req, res) => {
      res.json(config.templates);
    });

    // Health check
    this.app.get('/health', (req, res) => {
      res.json({ status: 'ok' });
    });
  }

  /**
   * Setup WebSocket for real-time updates
   */
  _setupWebSocket() {
    this.io.on('connection', (socket) => {
      const clientId = socket.id.substring(0, 8);
      logger.info(`🔌 UI ACTION: Client connected [${clientId}]`);

      // Send initial data
      socket.emit('status', { ready: this.bot.isReady });
      socket.emit('messages', this.bot.getRecentMessages());
      socket.emit('chats', this.bot.getAllChats());

      // Handle send message from UI
      socket.on('send:message', async (data) => {
        try {
          const chat = await this.bot.getChatById(data.chatId);
          const chatName = chat.name || data.chatId;
          
          logger.info(`📤 UI ACTION (WebSocket): Sending message to ${chatName}`);
          logger.info(`   Message: "${data.message}"`);
          
          await this.bot.sendMessage(data.chatId, data.message);
          
          logger.success(`✅ Message sent successfully to ${chatName}`);
          socket.emit('send:success', { chatId: data.chatId });
        } catch (error) {
          logger.error(`❌ Failed to send message: ${error.message}`);
          socket.emit('send:error', { error: error.message });
        }
      });

      socket.on('disconnect', () => {
        logger.info(`🔌 UI ACTION: Client disconnected [${clientId}]`);
      });
    });
  }

  /**
   * Setup event listeners for bot events
   */
  _setupEventListeners() {
    // Bot ready
    eventBus.on('bot:ready', () => {
      logger.info('Bot ready event received, notifying clients');
      this.io.emit('status', { ready: true });
      this.io.emit('chats', this.bot.getAllChats());
    });

    // Bot disconnected
    eventBus.on('bot:disconnected', (reason) => {
      logger.warning('Bot disconnected, notifying clients');
      this.io.emit('status', { ready: false, reason });
    });

    // New message
    eventBus.on('message', (data) => {
      this.io.emit('message', data);
    });

    // QR code
    eventBus.on('bot:qr', (qr) => {
      logger.info('QR code generated, sending to clients');
      this.io.emit('qr', { qr });
    });

    // Status updates
    eventBus.on('status', (data) => {
      this.io.emit('status', data);
    });
  }

  /**
   * Start the server
   */
  start() {
    const port = config.server.port;
    const host = config.server.host;

    this.server.listen(port, host, () => {
      logger.success(`🌐 Web UI running at http://${host}:${port}`);
    });
  }
}

module.exports = WebServer;
