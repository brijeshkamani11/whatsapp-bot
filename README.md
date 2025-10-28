# WhatsApp Bot - Modular Automation System

> **⚠️ FIRST TIME HERE? Read [START_HERE.md](START_HERE.md) first! It explains the documentation structure and reading order.**

> **⚠️ CRITICAL: This README is the single source of truth for this project. ANY changes to goals, requirements, structure, or features MUST be documented here immediately.**

Personal WhatsApp automation bot with Web UI for managing messages, quick replies, and context-aware automation.

## 📋 Project Purpose

**Primary Goal:** Automate repetitive WhatsApp tasks while maintaining full user control and privacy.

**Key Requirements:**
- ✅ Approve messages before sending (user control)
- ✅ Fast replies and workflow efficiency
- ✅ Save time during support chats (e.g., HP support case)
- ✅ Run locally with full privacy/security
- ✅ Support rapid development through AI-assisted coding
- ✅ Never expose commands to receivers (invisible automation)

## 🎯 Current Implementation Status

### ✅ **COMPLETED Features (v2.0.0)**

#### Core Bot Functionality
- ✅ WhatsApp Web integration via `whatsapp-web.js`
- ✅ LocalAuth (persistent session, no repeated QR scanning)
- ✅ Command system with modular architecture
- ✅ Event-driven design with EventBus
- ✅ Comprehensive logging for all actions
- ✅ Message interception (commands don't reach receiver)

#### Web UI (Port 3000)
- ✅ Real-time chat interface with WebSocket
- ✅ Chat list with selection
- ✅ Quick reply buttons
- ✅ Custom message input
- ✅ Template library
- ✅ Status indicator
- ✅ Mobile responsive design
- ✅ Dark theme (WhatsApp-style)

#### Commands
- ✅ `!ping` - Health check
- ✅ `!busy` - Quick busy reply
- ✅ `!send <msg>` - Send with terminal approval
- ✅ `!help` - List all commands

#### Developer Experience
- ✅ Nodemon auto-reload on file changes
- ✅ Debugger support (`--inspect` on port 9229)
- ✅ Modular command system (BaseCommand pattern)
- ✅ Centralized configuration (`config.js`)
- ✅ Structured logging with Logger utility

## 🚀 Features

## 📁 Project Structure

```
whatsapp-bot/
├── START_HERE.md               # 🚀 READ THIS FIRST! Entry point for all
├── README.md                   # 📖 THIS FILE - Source of truth
├── PROJECT_RULES.md            # 🚨 Mandatory rules for development
├── CONTRIBUTING.md             # 📝 Contribution guidelines
├── app.js                      # Main entry point
├── config.js                   # Configuration file (⚠️ Update README when modified)
├── index.js                    # Legacy entry (backup)
├── package.json
├── .gitignore
├── .ai/
│   └── MEMORY_SYNC_RULE.md    # 🤖 Memory-Documentation sync (ALL AIs)
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
├── .windsurf/
│   └── README_ENFORCEMENT.md  # 🤖 Windsurf-specific enforcement
├── src/
│   ├── bot/
│   │   └── WhatsAppBot.js     # Core bot logic
│   ├── commands/
│   │   ├── BaseCommand.js     # Command base class
│   │   ├── CommandManager.js  # Command registry
│   │   ├── PingCommand.js
│   │   ├── BusyCommand.js
│   │   ├── SendCommand.js
│   │   └── HelpCommand.js
│   ├── server/
│   │   └── WebServer.js       # Express + Socket.IO server
│   └── utils/
│       ├── eventBus.js        # Event emitter for cross-module communication
│       └── logger.js          # Structured logging
└── public/
    └── index.html             # Web UI

```

### 📚 Documentation Files (Read in Order)

1. **START_HERE.md** - 🚀 **READ THIS FIRST** - Explains documentation hierarchy
2. **README.md** (this file) - Complete project documentation, roadmap, and status
3. **PROJECT_RULES.md** - Mandatory development rules and best practices
4. **CONTRIBUTING.md** - Detailed contribution guidelines and workflows
5. **.ai/MEMORY_SYNC_RULE.md** - 🤖 **FOR ALL AIs** - Memory-documentation sync rule
6. **.github/PULL_REQUEST_TEMPLATE.md** - PR checklist including README update requirement
7. **.windsurf/README_ENFORCEMENT.md** - Windsurf-specific enforcement (optional)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start in development mode (with auto-reload)
npm run dev

# Start in production mode
npm start
```

## 🌐 Web UI

Once started, open your browser:
```
http://localhost:3000
```

### Features:
- View all chats
- See incoming messages in real-time
- Send quick replies with one click
- Use templates for common responses
- Send custom messages
- Mobile responsive design

## 📝 Adding New Commands

Create a new file in `src/commands/`:

```javascript
const BaseCommand = require('./BaseCommand');

class MyCommand extends BaseCommand {
  constructor() {
    super('mycommand', 'Description of my command', '!mycommand <args>');
  }

  async execute(msg, chat, args, client) {
    // Your command logic here
    await chat.sendMessage('Response');
  }
}

module.exports = MyCommand;
```

Register in `app.js`:
```javascript
const MyCommand = require('./src/commands/MyCommand');
commandManager.register(new MyCommand());
```

## 🎨 Adding Templates

Edit `config.js`:
```javascript
templates: {
  myTemplate: "Your template message here"
}
```

Templates automatically appear in the Web UI.

## 🔧 Configuration

Edit `config.js` to customize:
- Server port and host
- Command prefix
- Templates
- UI settings
- Log levels

## 📊 API Endpoints

- `GET /api/status` - Bot status
- `GET /api/messages` - Recent messages
- `GET /api/chats` - All chats
- `POST /api/send` - Send message
- `GET /api/templates` - Get templates

## 🔌 WebSocket Events

**Server → Client:**
- `status` - Bot connection status
- `message` - New message received
- `messages` - Message history
- `chats` - Chat list
- `qr` - QR code for authentication

**Client → Server:**
- `send:message` - Send a message

## 🚦 Commands

| Command | Description |
|---------|-------------|
| `!ping` | Test bot responsiveness |
| `!busy` | Send busy auto-reply |
| `!send <msg>` | Send with terminal approval |
| `!help` | Show all commands |

## 🔮 Future Roadmap & Goals

### 🎯 **HIGH PRIORITY - Next Sprint**

#### 1. Context-Aware Auto-Reply System
**Status:** 🔴 Not Started  
**Goal:** Analyze incoming messages and suggest/auto-send contextual replies
- [ ] Message content analysis (keyword detection)
- [ ] Sender history tracking
- [ ] Smart reply suggestions in UI
- [ ] Auto-reply with approval workflow
- [ ] Learning from user's reply patterns

**Technical Approach:**
- Use NLP library (compromise.js or natural.js)
- Store conversation context in memory
- Pattern matching for common scenarios
- UI notification for suggested replies

#### 2. Template System Enhancement
**Status:** 🟡 Partial (basic templates exist)  
**Goal:** Professional reply templates with variables
- [ ] Template categories (support, work hours, meetings, etc.)
- [ ] Variable substitution (name, time, date)
- [ ] Template editor in UI
- [ ] Import/export templates
- [ ] Template usage analytics

**Example:**
```
Template: "Hi {name}, I'm available {time}. Let's discuss {topic}."
```

#### 3. Mode System (Work/Personal)
**Status:** 🔴 Not Started  
**Goal:** Different automation behaviors based on context
- [ ] Work Mode (professional tone, business hours)
- [ ] Personal Mode (casual tone, 24/7)
- [ ] DND Mode (no notifications, emergency only)
- [ ] Mode toggle in UI
- [ ] Schedule-based mode switching

### 🎯 **MEDIUM PRIORITY - Future Sprints**

#### 4. Contact-Specific Automation
**Status:** 🔴 Not Started  
**Goal:** Custom rules per contact/group
- [ ] Whitelist/blacklist contacts
- [ ] Custom auto-replies per contact
- [ ] Priority contacts (always notify)
- [ ] Mute specific contacts
- [ ] Group-specific rules

#### 5. Chat Summarization
**Status:** 🔴 Not Started  
**Goal:** Summarize long conversations
- [ ] Summarize chat history
- [ ] Export summaries to file
- [ ] Daily/weekly digest
- [ ] Important message extraction
- [ ] Search within summaries

#### 6. Command Shortcuts
**Status:** 🔴 Not Started  
**Goal:** Quick access to complex workflows
- [ ] `#hp1` → Send pre-defined HP support response
- [ ] `#meeting` → Schedule meeting workflow
- [ ] `#status` → Send project status update
- [ ] Custom shortcut creator in UI
- [ ] Shortcut with parameters

#### 7. Message Scheduling
**Status:** 🔴 Not Started  
**Goal:** Schedule messages for future delivery
- [ ] Schedule message for specific time
- [ ] Recurring messages (daily/weekly)
- [ ] Timezone support
- [ ] Schedule management UI
- [ ] Cancel/edit scheduled messages

#### 8. Analytics Dashboard
**Status:** 🔴 Not Started  
**Goal:** Insights into messaging patterns
- [ ] Messages sent/received stats
- [ ] Response time analytics
- [ ] Most active contacts
- [ ] Template usage statistics
- [ ] Time-based activity graphs

### 🎯 **LOW PRIORITY - Long-term Goals**

#### 9. AI Integration (GPT/Claude)
**Status:** 🔴 Not Started  
**Goal:** AI-powered message composition
- [ ] Integrate OpenAI/Anthropic API
- [ ] Context-aware message generation
- [ ] Tone adjustment (formal/casual)
- [ ] Multi-language support
- [ ] Privacy-first (local processing option)

#### 10. Advanced UI Features
**Status:** 🔴 Not Started  
- [ ] Message search
- [ ] Media preview (images, videos)
- [ ] Voice message support
- [ ] Emoji picker
- [ ] Message formatting (bold, italic)
- [ ] Draft messages

#### 11. Backup & Export
**Status:** 🔴 Not Started  
- [ ] Export chat history
- [ ] Backup configuration
- [ ] Import from other tools
- [ ] Cloud sync (optional)

#### 12. Multi-Device Support
**Status:** 🔴 Not Started  
- [ ] Access UI from multiple devices
- [ ] Mobile app (PWA)
- [ ] Desktop app (Electron)

## 📊 Status Legend
- 🔴 Not Started
- 🟡 In Progress / Partial
- 🟢 Completed
- ⏸️ On Hold
- ❌ Cancelled

## 🐛 Debugging

Run with debugger:
```bash
npm run dev
```

Attach debugger in VS Code or Chrome DevTools at `localhost:9229`

## 🤖 AI Assistant Guidelines

**⚠️ MANDATORY READING FOR ALL AI ASSISTANTS (Windsurf, Cursor, Copilot, ChatGPT, Claude, etc.)**

> **📖 Also read: PROJECT_RULES.md and CONTRIBUTING.md for complete guidelines**

### 🚨 CRITICAL: Memory-Documentation Sync

**When you create or update a memory, you MUST also update the corresponding file:**

| Memory About | Update This File | Section |
|--------------|------------------|---------|
| New rule | PROJECT_RULES.md | Add to appropriate section |
| New feature | README.md | Current Implementation Status |
| New goal | README.md | Future Roadmap |
| User preference | PROJECT_RULES.md | AI Assistant Guidelines |
| Project context | README.md | Project Purpose |
| Architecture | README.md | Project Structure |

**BOTH memory AND files must stay in sync. Never update just one.**

### Core Principles

1. **User Persona:**
   - Values speed, clarity, and no time waste
   - Direct responses, NO soft explanations
   - If user asks for feature → implement directly with working code
   - After update → auto-restart bot if possible

2. **Code Quality Rules:**
   - Always maintain LocalAuth (no repeated QR login)
   - Never remove existing functionality without explicit approval
   - Modular structure is mandatory
   - Clean code with clear logs
   - Show who sent, text received, actions taken

3. **Development Workflow:**
   - Edit files directly in workspace
   - Ensure project compiles and runs successfully
   - Nodemon must continue working
   - Debugger must auto-reconnect after restart
   - No breaking changes unless approved

4. **Logging Requirements:**
   - Log ALL actions that affect sender or receiver
   - Use structured logging (Logger utility)
   - Include context: who, what, when, where
   - Terminal logs for server actions
   - Console logs for UI actions

5. **Documentation Rules:**
   - **CRITICAL:** Update this README immediately after ANY structural change
   - Document new features in "Current Implementation Status"
   - Move completed roadmap items to "Completed Features"
   - Add new goals to "Future Roadmap"
   - Update file structure if new directories/files added

### When Adding New Features

```markdown
1. Check roadmap in this README
2. Implement feature following modular pattern
3. Add comprehensive logging
4. Test thoroughly
5. Update README:
   - Move from roadmap to completed
   - Update status from 🔴 to 🟢
   - Document any new commands/APIs
   - Update file structure if needed
6. Commit with clear message
```

### File Modification Guidelines

**Always Modify:**
- `config.js` - For new templates, settings
- `src/commands/` - For new commands (create new file)
- `app.js` - To register new commands
- `README.md` - Document changes

**Rarely Modify:**
- `src/bot/WhatsAppBot.js` - Only for core bot logic
- `src/server/WebServer.js` - Only for new API endpoints
- `public/index.html` - Only for UI enhancements

**Never Modify Without Permission:**
- `package.json` - Unless adding new dependencies
- `.wwebjs_auth/` - Authentication data
- `node_modules/` - Managed by npm

### Testing Checklist

Before marking feature as complete:
- [ ] Bot starts without errors
- [ ] Web UI loads and connects
- [ ] Commands work as expected
- [ ] Logging is comprehensive
- [ ] No breaking changes to existing features
- [ ] README updated
- [ ] Code is modular and maintainable

## 🔐 Security & Privacy

**Local-First Approach:**
- All data stored locally
- No external API calls (except WhatsApp Web)
- Authentication data in `.wwebjs_auth/` (gitignored)
- No telemetry or tracking
- User has full control

**Future AI Integration:**
- Must be opt-in
- Local processing preferred
- API keys stored securely (environment variables)
- Never log sensitive data

## 🛠️ Troubleshooting

### Bot Not Starting
```bash
# Check if port 3000 is available
netstat -ano | findstr :3000

# Clear auth and restart
rm -rf .wwebjs_auth .wwebjs_cache
npm run dev
```

### UI Not Loading
```bash
# Check bot status
curl http://localhost:3000/api/status

# Check browser console for errors
# Refresh with Ctrl+Shift+R
```

### Commands Not Working
- Ensure command starts with `!` (configurable in `config.js`)
- Check terminal logs for errors
- Verify command is registered in `app.js`

## 📞 Support & Contribution

**For Future Developers/AI Assistants:**

> **🚀 First time? Start with [START_HERE.md](START_HERE.md)**

1. **Read START_HERE.md** (explains documentation structure)
2. **Read this README completely** (you are here)
3. **Read PROJECT_RULES.md** (mandatory rules)
4. **Read CONTRIBUTING.md** (detailed guidelines)
5. Understand the modular architecture
6. Follow the coding principles
7. Test thoroughly before committing
8. **Update documentation** (especially this README)

**Project Philosophy:**
- Speed over perfection (iterate quickly)
- User control over automation
- Privacy over convenience
- Modularity over monolith
- Documentation over assumptions

## 📄 License

ISC

---

**Last Updated:** 2025-10-28  
**Version:** 2.0.0  
**Maintainer:** User (with AI assistance)  
**Next Milestone:** Context-aware auto-reply system
