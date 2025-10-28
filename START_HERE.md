# 🚀 START HERE - Read This First

> **⚠️ STOP! Before doing ANYTHING in this project, read this file completely.**

## 📖 Documentation Hierarchy - Read in This Order

This project has a strict documentation structure. You MUST read these files in order:

### **Step 1: START_HERE.md** ← YOU ARE HERE
This file explains the documentation structure and what to read.

### **Step 2: README.md** (5-10 min read)
- Complete project overview
- Current implementation status
- Future roadmap with priorities
- Installation and usage
- **This is the SINGLE SOURCE OF TRUTH**

### **Step 3: PROJECT_RULES.md** (3-5 min read)
- 10 mandatory rules (NEVER break these)
- Development standards
- Forbidden practices
- Best practices
- **These rules are NON-NEGOTIABLE**

### **Step 4: CONTRIBUTING.md** (5 min read)
- Detailed contribution workflow
- When and how to update README
- Code style guidelines
- Testing requirements
- **Follow this for all changes**

### **Step 5: Code Files**
Only after reading the above, start exploring:
- `app.js` - Entry point
- `config.js` - Configuration
- `src/` - Source code

---

## 🚨 THE GOLDEN RULES

### Rule #1: README-First Development
**EVERY structural change MUST update README.md immediately.**

This is not optional. This is not a suggestion. This is MANDATORY.

### Rule #1.1: Memory-Documentation Sync
**When creating/updating AI memories, ALSO update documentation files.**

If you create a memory, you MUST also update the corresponding file:
- New rule → Update PROJECT_RULES.md
- New feature → Update README.md (Current Implementation)
- New goal → Update README.md (Future Roadmap)
- User preference → Update PROJECT_RULES.md (AI Guidelines)
- Project context → Update README.md (Project Purpose)

**BOTH memory AND files must stay in sync. Always update both.**

### What counts as "structural change"?
- ✅ Adding new features
- ✅ Adding/removing files or directories
- ✅ Adding new commands
- ✅ Modifying configuration options
- ✅ Adding dependencies
- ✅ Completing roadmap items
- ✅ Changing core functionality

### What to update in README.md?
1. **Current Implementation Status** - Add completed features
2. **Future Roadmap** - Move completed items, update status (🔴→🟢)
3. **Project Structure** - Add new files/directories
4. **Commands** - Document new commands
5. **API Endpoints** - Document new APIs

---

## 🤖 For AI Assistants (Windsurf, Cursor, Copilot, etc.)

### On EVERY New Session:

1. ✅ Read START_HERE.md (this file)
2. ✅ Read README.md completely
3. ✅ Read PROJECT_RULES.md
4. ✅ Read CONTRIBUTING.md
5. ✅ Check current implementation status
6. ✅ Check future roadmap
7. ✅ Then start working

### Before Making ANY Change:

1. ✅ Check if it's in the roadmap
2. ✅ Follow modular architecture
3. ✅ Add comprehensive logging
4. ✅ Test thoroughly
5. ✅ **UPDATE README.md**
6. ✅ Commit with clear message

### Communication Style:
- ✅ Direct and concise (no fluff)
- ✅ Implement, don't just suggest
- ✅ Code-first approach
- ❌ No soft explanations
- ❌ No "I think" or "maybe"

---

## 👨‍💻 For Human Contributors

### First Time Setup:

```bash
# 1. Read documentation (30 minutes)
START_HERE.md → README.md → PROJECT_RULES.md → CONTRIBUTING.md

# 2. Install dependencies
npm install

# 3. Start bot
npm run dev

# 4. Open Web UI
http://localhost:3000
```

### Before Contributing:

1. Read all documentation files
2. Understand the modular architecture
3. Check if feature is in roadmap
4. Follow the contribution workflow
5. **Always update README.md**

---

## 📂 Quick File Reference

### Documentation (Read First)
- `START_HERE.md` ← You are here
- `README.md` - Single source of truth
- `PROJECT_RULES.md` - Mandatory rules
- `CONTRIBUTING.md` - Contribution guide
- `.github/PULL_REQUEST_TEMPLATE.md` - PR checklist

### Code (Explore After Reading Docs)
- `app.js` - Main entry point
- `config.js` - Configuration
- `src/bot/WhatsAppBot.js` - Core bot logic
- `src/commands/` - All commands
- `src/server/WebServer.js` - Web server
- `public/index.html` - Web UI

### Generated/Ignored
- `.wwebjs_auth/` - Authentication (don't touch)
- `node_modules/` - Dependencies (don't commit)

---

## ⚡ Quick Start for Different Roles

### 🤖 AI Assistant Starting New Session
```
1. Read START_HERE.md (2 min)
2. Read README.md (10 min)
3. Read PROJECT_RULES.md (5 min)
4. Ready to help!
```

### 👨‍💻 Developer Adding Feature
```
1. Read all docs (30 min)
2. Check roadmap in README.md
3. Implement following patterns
4. Test thoroughly
5. Update README.md
6. Submit PR
```

### 🐛 Developer Fixing Bug
```
1. Read README.md + PROJECT_RULES.md
2. Identify root cause
3. Fix and test
4. Update README.md if behavior changed
5. Submit PR
```

### 📝 Documentation Update
```
1. Read README.md structure
2. Make changes
3. Ensure consistency
4. Submit PR
```

---

## 🎯 Project Philosophy (Remember This)

1. **Speed over perfection** - Iterate quickly
2. **User control over automation** - Always ask before acting
3. **Privacy over convenience** - Local-first approach
4. **Modularity over monolith** - Keep it maintainable
5. **Documentation over assumptions** - Write it down

---

## ❓ Common Questions

### Q: Where do I start?
**A:** Read this file → README.md → PROJECT_RULES.md → CONTRIBUTING.md

### Q: Can I skip reading the docs?
**A:** NO. You will break things and waste time.

### Q: Do I really need to update README.md?
**A:** YES. ALWAYS. This is MANDATORY.

### Q: What if I'm just fixing a typo?
**A:** Small fixes don't need README update. Structural changes do.

### Q: Where is the roadmap?
**A:** In README.md under "Future Roadmap & Goals"

### Q: How do I add a new command?
**A:** Read CONTRIBUTING.md → "Adding New Command" section

### Q: Can I use a different architecture?
**A:** NO. Follow the modular pattern. Read PROJECT_RULES.md.

---

## 🚦 Traffic Light System

### 🔴 STOP - Read First
- START_HERE.md
- README.md
- PROJECT_RULES.md
- CONTRIBUTING.md

### 🟡 CAUTION - Understand Before Changing
- Core bot logic
- Authentication
- Event system
- WebSocket implementation

### 🟢 GO - Safe to Modify
- Adding new commands
- Adding templates
- UI styling
- Documentation

---

## 📊 Success Checklist

Before claiming "I understand the project":

- [ ] Read START_HERE.md
- [ ] Read README.md completely
- [ ] Read PROJECT_RULES.md
- [ ] Read CONTRIBUTING.md
- [ ] Understand modular architecture
- [ ] Know where to add new commands
- [ ] Know when to update README.md
- [ ] Understand the roadmap
- [ ] Know the 10 mandatory rules
- [ ] Understand user's communication style

---

## 🎓 Final Words

This project values:
- **Clear documentation** - That's why you're reading this
- **Maintainability** - That's why we have rules
- **Speed** - That's why we iterate quickly
- **Quality** - That's why we test thoroughly

**Now go read README.md. Seriously. Do it now.**

---

**Last Updated:** 2025-10-28  
**Version:** 2.0.0  
**Next Step:** → Read README.md
