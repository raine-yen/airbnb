# Claude Code Configuration

Project-local skills live in `.claude/skills/`; specialist role definitions live in `.claude/agents/`. `CLAUDE.md` holds concise permanent operating rules.

## Intended safe hooks

- Post-edit formatting: format changed supported web source files only; never format binary assets or render output.
- Pre-completion: run `pnpm quality` once, fail on nonzero status, and never create a recursive stop hook.
- Secret protection: prevent staging `.env`, `.env.local`, credentials, private keys, and token files.

No executable hooks are activated because the Claude Code runtime is not installed or inspectable in this environment. Enable only after verifying the installed Claude hook schema.
