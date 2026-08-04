# Environment Audit

Audit date: 2026-08-04 (America/Los_Angeles)

| Requirement | Result | Notes |
| --- | --- | --- |
| Git | Available: 2.54.0.windows.1 | Repository initialized; no commits and no remote configured. |
| Node.js | Available: v24.16.0 | Suitable to run project checks. |
| pnpm | Not found | Required website package manager; install before dependency setup. |
| Python | Available: 3.12.10 | Suitable for Blender automation when Blender is installed. |
| Blender | Not found | Required for scene inspection and rendering. |
| FFmpeg / FFprobe | Not found | Required for video assembly and metadata validation. |
| ImageMagick | Not found | Optional for contact sheets; an FFmpeg alternative can be used when installed. |
| Claude Code | Not found | Claude-only commands (`/doctor`, `/mcp`) cannot be run in this environment. |
| Codex skills | Inspected | Project-specific Claude-compatible skills will be created under `.claude/skills/`. |
| Incoming assets | Missing | `incoming-assets/` was absent at audit; created as a protected intake folder. |

## Consequences

The repository foundation may proceed. Asset inspection, public render production, video editing, visual review, and website video embedding are blocked until a source asset, verified license, Blender, FFmpeg/FFprobe, and pnpm are available.

No external MCP server was installed or trusted as part of this audit.
