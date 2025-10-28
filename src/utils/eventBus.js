const EventEmitter = require('events');

class EventBus extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(20); // Prevent memory leak warnings
  }

  // Typed event emitters for better code clarity
  emitMessage(data) {
    this.emit('message', data);
  }

  emitCommand(data) {
    this.emit('command', data);
  }

  emitBotReady() {
    this.emit('bot:ready');
  }

  emitBotDisconnected(reason) {
    this.emit('bot:disconnected', reason);
  }

  emitQR(qr) {
    this.emit('bot:qr', qr);
  }

  emitChatUpdate(chat) {
    this.emit('chat:update', chat);
  }
}

// Singleton instance
module.exports = new EventBus();
