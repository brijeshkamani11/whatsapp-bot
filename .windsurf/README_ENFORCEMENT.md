# README Update Enforcement - For AI Assistants

## 🚨 CRITICAL: This File is for Windsurf AI Memory

**This file ensures all future AI sessions remember the documentation rules.**

## Mandatory Actions on Every Session

### 1. First Action (Always)
```
Read in order:
1. START_HERE.md
2. README.md
3. PROJECT_RULES.md
4. CONTRIBUTING.md
```

### 2. Before ANY Code Change
```
Check:
- Is this a structural change?
- Will README.md need updating?
- Are there roadmap items to move?
```

### 3. After ANY Structural Change
```
Update README.md:
- Current Implementation Status (add completed features)
- Future Roadmap (move 🔴→🟢, update status)
- Project Structure (if files/dirs added)
- Commands (if new commands added)
- API Endpoints (if new APIs added)
- Configuration (if config changed)
```

## What is a "Structural Change"?

✅ YES - Update README:
- Adding new features
- Adding new files or directories
- Adding new commands
- Completing roadmap items
- Adding dependencies
- Changing configuration options
- Adding API endpoints
- Modifying core functionality
- Changing project structure

❌ NO - Skip README:
- Fixing typos
- Small bug fixes (no behavior change)
- Code formatting
- Comment updates
- Log message changes

## Core Rules (Never Break)

1. **LocalAuth** - Never break persistent session
2. **Modular Architecture** - Follow BaseCommand pattern
3. **Comprehensive Logging** - Log all sender/receiver actions
4. **No Breaking Changes** - Without explicit approval
5. **Direct Communication** - No soft explanations
6. **Test First** - Before marking complete

## User Preferences

- Speed over perfection
- Direct implementation (no suggestions)
- Privacy-first (local only)
- Modular structure
- Clear logging
- No time waste

## Project Info

- **Location:** c:/Users/brije/whatsapp-bot
- **GitHub:** https://github.com/brijeshkamani11/whatsapp-bot.git
- **Version:** 2.0.0
- **Entry Point:** START_HERE.md

## Documentation Hierarchy

```
START_HERE.md (Entry point - explains everything)
    ↓
README.md (Source of truth - complete docs)
    ↓
PROJECT_RULES.md (Mandatory rules - never break)
    ↓
CONTRIBUTING.md (Workflows - how to contribute)
```

## Enforcement Mechanism

This rule is stored in:
1. ✅ Cascade Memory (permanent)
2. ✅ This file (.windsurf/README_ENFORCEMENT.md)
3. ✅ START_HERE.md (entry point)
4. ✅ README.md (top banner)
5. ✅ PROJECT_RULES.md (rule #1)
6. ✅ CONTRIBUTING.md (critical rule)
7. ✅ config.js (header comment)
8. ✅ .github/PULL_REQUEST_TEMPLATE.md (checklist)

## Quick Checklist

Before ending any session where code was changed:

- [ ] Did I read START_HERE.md?
- [ ] Did I make structural changes?
- [ ] Did I update README.md?
- [ ] Did I move roadmap items if completed?
- [ ] Did I update status emojis?
- [ ] Did I test the changes?
- [ ] Did I maintain LocalAuth?
- [ ] Did I follow modular architecture?
- [ ] Did I add comprehensive logging?

## Remember

**"A project without updated documentation is a project that will be forgotten."**

This is not optional. This is MANDATORY.

---

**Last Updated:** 2025-10-28  
**Enforcement Level:** CRITICAL  
**Exceptions:** NONE
