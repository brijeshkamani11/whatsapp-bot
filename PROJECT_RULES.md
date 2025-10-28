# Project Rules - WhatsApp Bot

> **📖 New here? Read [START_HERE.md](START_HERE.md) first to understand the documentation hierarchy.**

## 🚨 MANDATORY RULES - NEVER BREAK THESE

### Rule #1: README-First Development
**Every structural change MUST update README.md immediately**

This is not optional. This is not a suggestion. This is MANDATORY.

### Rule #2: LocalAuth Must Never Break
**Never remove or break LocalAuth functionality**

Users should NEVER have to scan QR code repeatedly. If your change breaks this, revert it.

### Rule #3: No Breaking Changes Without Approval
**Existing features must continue working**

Before removing or significantly changing functionality, get explicit user approval.

### Rule #4: Modular Architecture is Sacred
**All new code must follow modular patterns**

- Commands extend BaseCommand
- Services are separate classes
- No monolithic files
- Clear separation of concerns

### Rule #5: Comprehensive Logging
**All actions affecting sender/receiver must be logged**

If it sends a message, logs it. If it processes a command, logs it. If it fails, logs it.

## 📋 Development Rules

### File Organization Rules

1. **Commands go in `src/commands/`**
   - One command per file
   - Extend BaseCommand
   - Register in app.js

2. **Services go in `src/services/`** (when created)
   - Business logic separate from commands
   - Reusable across commands

3. **Utilities go in `src/utils/`**
   - Pure functions
   - No side effects
   - Well-tested

4. **Configuration in `config.js`**
   - No hardcoded values in code
   - All settings configurable
   - Document defaults

### Code Quality Rules

1. **Every function must have a purpose**
   - Single responsibility
   - Clear naming
   - JSDoc comments for complex logic

2. **Error handling is mandatory**
   - Try-catch for async operations
   - Meaningful error messages
   - Log errors with context

3. **No console.log in production code**
   - Use Logger utility
   - Structured logging
   - Appropriate log levels

### Testing Rules

1. **Test before committing**
   - Bot must start
   - UI must load
   - Commands must work
   - No console errors

2. **Test edge cases**
   - Empty inputs
   - Invalid data
   - Network failures
   - Concurrent operations

### Documentation Rules

1. **README.md is the source of truth**
   - Update immediately after changes
   - Keep roadmap current
   - Document all features

2. **Code comments for complex logic**
   - Why, not what
   - Explain non-obvious decisions
   - Link to relevant docs

3. **API documentation**
   - Document all endpoints
   - Include request/response examples
   - Note authentication requirements

## 🚫 Forbidden Practices

### NEVER Do These:

1. ❌ **Commit without updating README** (if structural change)
2. ❌ **Remove LocalAuth functionality**
3. ❌ **Break existing commands without approval**
4. ❌ **Hardcode sensitive data** (API keys, tokens)
5. ❌ **Commit node_modules or .wwebjs_auth**
6. ❌ **Use console.log instead of Logger**
7. ❌ **Create monolithic files** (>500 lines)
8. ❌ **Skip error handling**
9. ❌ **Ignore user's coding preferences**
10. ❌ **Make assumptions without checking**

## ✅ Best Practices

### ALWAYS Do These:

1. ✅ **Read README.md before starting**
2. ✅ **Follow modular architecture**
3. ✅ **Add comprehensive logging**
4. ✅ **Test thoroughly**
5. ✅ **Update documentation**
6. ✅ **Use structured logging**
7. ✅ **Handle errors gracefully**
8. ✅ **Keep functions small and focused**
9. ✅ **Follow existing code patterns**
10. ✅ **Ask before breaking changes**

## 🎯 Priority Order

When making decisions, prioritize in this order:

1. **User Control** - User must approve important actions
2. **Privacy** - Local-first, no data leaks
3. **Stability** - Don't break existing features
4. **Speed** - Fast iteration over perfection
5. **Maintainability** - Clean, modular code
6. **Features** - New functionality

## 🤖 AI Assistant Specific Rules

### For Windsurf, Cursor, Copilot, etc.

1. **Read README.md on every new session**
2. **Check PROJECT_RULES.md before making changes**
3. **Follow user's communication style** (direct, no fluff)
4. **Update README.md after structural changes**
5. **Never assume - ask if unsure**
6. **Test code before presenting**
7. **Provide working, complete solutions**
8. **Don't remove functionality without permission**

### Response Style

- ✅ Direct and concise
- ✅ Code-first approach
- ✅ Implement, don't just suggest
- ❌ No "soft" explanations
- ❌ No "I think" or "maybe"
- ❌ No unnecessary acknowledgments

## 📊 Change Impact Assessment

Before making changes, assess impact:

### Low Impact (OK to proceed)
- Adding new command
- Adding new template
- UI styling changes
- Documentation updates
- Log message changes

### Medium Impact (Test thoroughly)
- Modifying existing command
- Adding new API endpoint
- Changing configuration structure
- Adding new dependency
- Refactoring code

### High Impact (Get approval first)
- Changing authentication
- Modifying core bot logic
- Breaking API changes
- Removing features
- Major architectural changes

## 🔄 Update Workflow

### When Adding Feature:

1. Check roadmap in README
2. Implement following patterns
3. Add logging
4. Test thoroughly
5. Update README:
   - Move from roadmap to completed
   - Update status emoji
   - Document usage
6. Commit with clear message

### When Fixing Bug:

1. Identify root cause
2. Write fix
3. Test fix
4. Test that nothing else broke
5. Update README if behavior changed
6. Commit with bug description

### When Refactoring:

1. Ensure tests pass before
2. Make changes
3. Ensure tests pass after
4. Update README if structure changed
5. Commit with refactoring reason

## 📝 Commit Message Rules

### Format:
```
[TYPE] Brief description

Detailed explanation

README Updated: Yes/No
Breaking Change: Yes/No
```

### Types:
- `FEAT` - New feature
- `FIX` - Bug fix
- `REFACTOR` - Code refactoring
- `DOCS` - Documentation
- `STYLE` - Code style
- `TEST` - Testing
- `CHORE` - Maintenance

## 🎓 Learning Resources

### Understanding the Codebase:

1. Start with README.md
2. Read PROJECT_RULES.md (this file)
3. Look at app.js (entry point)
4. Study BaseCommand pattern
5. Examine existing commands
6. Check WebServer setup
7. Understand EventBus pattern

### Key Files to Understand:

- `app.js` - Application entry
- `config.js` - Configuration
- `src/bot/WhatsAppBot.js` - Core bot
- `src/commands/BaseCommand.js` - Command pattern
- `src/server/WebServer.js` - API server
- `src/utils/eventBus.js` - Event system
- `public/index.html` - UI

## 🚀 Quick Reference

### Adding New Command:
```bash
1. Create src/commands/NewCommand.js
2. Extend BaseCommand
3. Implement execute()
4. Register in app.js
5. Update README.md
```

### Adding New Template:
```bash
1. Edit config.js
2. Add to templates section
3. Restart bot (nodemon auto-restarts)
4. Update README.md if significant
```

### Adding New API Endpoint:
```bash
1. Edit src/server/WebServer.js
2. Add route in _setupRoutes()
3. Add logging
4. Test endpoint
5. Update README.md API section
```

---

**Remember: These rules exist to maintain quality and consistency. Follow them, and the project will remain maintainable and scalable.**

**Last Updated:** 2025-10-28  
**Version:** 2.0.0
