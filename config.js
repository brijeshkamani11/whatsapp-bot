/**
 * WhatsApp Bot Configuration
 * 
 * ⚠️ IMPORTANT: After modifying this file, update README.md if:
 * - New configuration sections added
 * - Default values changed significantly
 * - New features enabled/disabled
 */

module.exports = {
  // Server Configuration
  server: {
    port: 3000,
    host: 'localhost'
  },

  // Bot Configuration
  bot: {
    commandPrefix: '!',
    deleteCommandMessages: true,
    logLevel: 'info'
  },

  // Templates for quick replies
  templates: {
    busy: "I'm currently busy. Will reply soon ✅",
    available: "I'm available now. How can I help?",
    callLater: "Can't talk right now. Will call you later 📞",
    workingHours: "I'm available Mon-Fri, 9 AM - 6 PM. I'll respond during business hours.",
    meeting: "Meeting scheduled. I'll send you the details shortly 📅"
  },

  // UI Configuration
  ui: {
    theme: 'light',
    maxRecentMessages: 50,
    maxChatList: 20
  }
};
