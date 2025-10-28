# Memory-Documentation Sync Rule

> **FOR ALL AI ASSISTANTS: Windsurf, Cursor, Copilot, ChatGPT, Claude, GitHub Copilot, etc.**

## 🚨 CRITICAL RULE

**When you create or update an AI memory, you MUST also update the corresponding documentation file.**

## 📋 Memory-to-File Mapping

| Memory Type | Update This File | Section |
|-------------|------------------|---------|
| New rule | PROJECT_RULES.md | Add to appropriate section |
| New feature | README.md | Current Implementation Status |
| New goal | README.md | Future Roadmap (add with 🔴) |
| Completed goal | README.md | Move from Roadmap to Current (🔴→🟢) |
| User preference | PROJECT_RULES.md | AI Assistant Guidelines section |
| Project context | README.md | Project Purpose section |
| Architecture change | README.md | Project Structure section |
| New command | README.md | Commands section |
| New API endpoint | README.md | API Documentation section |

## ✅ Workflow

### When Creating Memory:

1. **Create/update the memory** in your AI system
2. **Identify which file** to update (use table above)
3. **Update the file** with the same information
4. **Verify sync** - memory and file should match

### Example:

```
User: "Remember that we use direct communication, no soft explanations"

AI Actions:
1. ✅ Create memory: "User prefers direct communication"
2. ✅ Update PROJECT_RULES.md → AI Assistant Guidelines section
3. ✅ Add: "Direct responses, NO soft explanations"
```

## 🎯 Why This Matters

### Problem Without Sync:
- Memory says one thing
- Files say another
- Different AIs get different information
- Documentation becomes stale
- New team members see outdated info

### Solution With Sync:
- ✅ Memory and files always match
- ✅ All AIs read same information
- ✅ Documentation stays current
- ✅ Works across IDEs
- ✅ Works across AI platforms

## 🔄 Cross-Platform Compatibility

This rule works for:
- ✅ **Windsurf** - Reads this file + .windsurf/README_ENFORCEMENT.md
- ✅ **Cursor** - Reads this file
- ✅ **VS Code + Copilot** - Reads this file
- ✅ **ChatGPT** - User can reference this file
- ✅ **Claude** - User can reference this file
- ✅ **Any AI** - This file is universal

## 📝 Checklist

Before ending any session where you created/updated memories:

- [ ] Did I create or update any memories?
- [ ] Did I update the corresponding file(s)?
- [ ] Do memory and file contain same information?
- [ ] Is the file committed to git?

## 🚫 What NOT to Do

❌ **DON'T:** Create memory without updating file
❌ **DON'T:** Update file without creating memory
❌ **DON'T:** Assume other AI will sync later
❌ **DON'T:** Skip sync because "it's just a small change"

## ✅ What TO Do

✅ **DO:** Always update both memory AND file
✅ **DO:** Use the mapping table above
✅ **DO:** Verify they match
✅ **DO:** Commit file changes to git

## 🎓 Remember

**"A memory without documentation is a memory that will be lost."**

**"Documentation without memory is documentation that will be forgotten."**

**Keep them in sync. Always.**

---

**This rule is MANDATORY for ALL AI assistants.**  
**No exceptions. No excuses.**

---

**Last Updated:** 2025-10-28  
**Applies To:** All AI assistants (Windsurf, Cursor, Copilot, ChatGPT, Claude, etc.)  
**Enforcement Level:** CRITICAL
