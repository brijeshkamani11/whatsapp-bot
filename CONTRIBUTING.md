# Contributing Guidelines

> **📖 New here? Read [START_HERE.md](START_HERE.md) first to understand the documentation hierarchy.**

## 🚨 CRITICAL RULE: README-First Development

**EVERY change to this project MUST be documented in README.md**

### When to Update README.md

✅ **ALWAYS update README when:**
- Adding new features
- Modifying project structure
- Adding/removing dependencies
- Changing configuration options
- Completing roadmap items
- Adding new commands
- Modifying core functionality
- Adding new API endpoints
- Changing development workflow

### When to Update Documentation Files

✅ **Creating/Updating AI Memories:**

When you create or update a memory, ALSO update the corresponding file:

| Memory About | Update This File | Section |
|--------------|------------------|---------|
| New rule | PROJECT_RULES.md | Add to appropriate section |
| New feature | README.md | Current Implementation Status |
| New goal | README.md | Future Roadmap |
| User preference | PROJECT_RULES.md | AI Assistant Guidelines |
| Project context | README.md | Project Purpose |
| Architecture | README.md | Project Structure |

**CRITICAL:** Memory and files must stay in sync. Update BOTH, not just one.

### How to Update README

1. **New Feature Added:**
   ```markdown
   - Add to "Current Implementation Status"
   - Move from "Future Roadmap" if it was planned
   - Update status from 🔴 to 🟢
   - Document usage in relevant section
   ```

2. **Structure Changed:**
   ```markdown
   - Update "Project Structure" section
   - Add new files/directories
   - Explain purpose of new components
   ```

3. **Roadmap Item Completed:**
   ```markdown
   - Move from roadmap to completed features
   - Update status emoji
   - Add completion date
   ```

4. **New Goal Added:**
   ```markdown
   - Add to appropriate priority section
   - Set status to 🔴 Not Started
   - Include technical approach
   - List sub-tasks
   ```

## Development Workflow

### Before Starting Work

1. Read README.md completely
2. Check "Future Roadmap" for planned features
3. Understand current implementation status
4. Review AI Assistant Guidelines

### During Development

1. Follow modular architecture
2. Add comprehensive logging
3. Write clean, maintainable code
4. Test thoroughly
5. Keep README.md in mind

### After Completing Work

1. ✅ Test all functionality
2. ✅ Update README.md (MANDATORY)
3. ✅ Update version if significant change
4. ✅ Add to CHANGELOG if exists
5. ✅ Commit with descriptive message

## Code Style

### File Headers

Add this to new files:
```javascript
/**
 * [File Name] - [Brief Description]
 * 
 * Purpose: [What this file does]
 * Dependencies: [Key dependencies]
 * 
 * ⚠️ Remember to update README.md when modifying this file
 */
```

### Logging Standards

```javascript
// Use structured logging
logger.info('Action description');
logger.success('Success message');
logger.error('Error message');
logger.warning('Warning message');

// Include context
logger.info(`📤 Sending message to ${chatName}`);
logger.info(`   Message: "${message}"`);
```

### Command Pattern

```javascript
const BaseCommand = require('./BaseCommand');

class NewCommand extends BaseCommand {
  constructor() {
    super('commandname', 'Description', '!commandname <args>');
  }

  async execute(msg, chat, args, client) {
    // Implementation
  }
}

module.exports = NewCommand;
```

## Testing Requirements

### Manual Testing Checklist

- [ ] Bot starts without errors
- [ ] Web UI loads and connects
- [ ] New feature works as expected
- [ ] Existing features still work
- [ ] Logging is comprehensive
- [ ] No console errors
- [ ] Mobile responsive (if UI change)

### Integration Testing

- [ ] Commands work from UI
- [ ] Commands work from WhatsApp
- [ ] WebSocket updates in real-time
- [ ] Error handling works
- [ ] Edge cases handled

## Documentation Standards

### README.md Sections to Update

1. **Current Implementation Status**
   - Add completed features here
   - Include version number

2. **Future Roadmap**
   - Update status emojis
   - Move completed items out
   - Add new goals

3. **Project Structure**
   - Add new files/directories
   - Explain purpose

4. **Commands**
   - Document new commands
   - Include usage examples

5. **API Endpoints**
   - Document new endpoints
   - Include request/response format

6. **Configuration**
   - Document new config options
   - Include default values

## Version Control

### Commit Message Format

```
[TYPE] Brief description

Detailed explanation if needed

Updated README: [Yes/No]
```

**Types:**
- `FEAT` - New feature
- `FIX` - Bug fix
- `REFACTOR` - Code refactoring
- `DOCS` - Documentation only
- `STYLE` - Code style changes
- `TEST` - Testing related

### Example Commits

```
FEAT: Add context-aware auto-reply system

Implemented NLP-based message analysis and smart reply suggestions.
- Added compromise.js for NLP
- Created AutoReplyService
- Updated UI with suggestion panel

Updated README: Yes
```

## AI Assistant Collaboration

### For AI Assistants (Windsurf, Cursor, etc.)

1. **Always read README.md first**
2. **Check roadmap before implementing**
3. **Follow user persona guidelines**
4. **Update README after changes**
5. **Maintain modular structure**
6. **Add comprehensive logging**
7. **Test before marking complete**

### For Human Developers

1. **Provide clear requirements to AI**
2. **Review AI-generated code**
3. **Verify README updates**
4. **Test thoroughly**
5. **Approve before deployment**

## Quality Standards

### Code Quality

- ✅ Modular and reusable
- ✅ Well-commented
- ✅ Error handling
- ✅ Logging included
- ✅ Follows existing patterns

### Documentation Quality

- ✅ Clear and concise
- ✅ Examples included
- ✅ Up-to-date
- ✅ No broken links
- ✅ Proper formatting

## Project Philosophy

Remember these principles:

1. **Speed over perfection** - Iterate quickly
2. **User control over automation** - Always ask before acting
3. **Privacy over convenience** - Local-first approach
4. **Modularity over monolith** - Keep it maintainable
5. **Documentation over assumptions** - Write it down

## Questions?

If unsure about anything:
1. Check README.md first
2. Look at existing code patterns
3. Ask before making breaking changes
4. Document your decisions

---

**Remember: A project without updated documentation is a project that will be forgotten.**
