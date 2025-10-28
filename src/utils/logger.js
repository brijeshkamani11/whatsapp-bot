class Logger {
  constructor(prefix = '') {
    this.prefix = prefix;
  }

  info(message, ...args) {
    console.log(`ℹ️  ${this.prefix}${message}`, ...args);
  }

  success(message, ...args) {
    console.log(`✅ ${this.prefix}${message}`, ...args);
  }

  error(message, ...args) {
    console.error(`❌ ${this.prefix}${message}`, ...args);
  }

  warning(message, ...args) {
    console.warn(`⚠️  ${this.prefix}${message}`, ...args);
  }

  command(message, ...args) {
    console.log(`↪️  ${this.prefix}${message}`, ...args);
  }

  incoming(message, ...args) {
    console.log(`📩 ${this.prefix}${message}`, ...args);
  }

  outgoing(message, ...args) {
    console.log(`📤 ${this.prefix}${message}`, ...args);
  }
}

module.exports = Logger;
