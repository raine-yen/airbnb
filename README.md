# Atria House — Property Visualization Study

A repeatable production system for calm, architecturally faithful short-form property visualization.

## Current status

**BLOCKED — SOURCE LICENSE REQUIRES HUMAN VERIFICATION.** No source asset has been supplied in `incoming-assets/`; video production and public rendering cannot begin.

## Prerequisites

- Node.js 24+ and pnpm
- Blender
- FFmpeg and FFprobe
- A licensed, commercially usable 3D property asset with source URL, creator name, and license text

## Working flow

1. Place an untouched source asset and its license/readme in `incoming-assets/`.
2. Run the asset audit and copy approved working files to `source-assets/`.
3. Create camera and render previews with Blender scripts.
4. Assemble outputs, inspect contact sheets, and run `pnpm quality`.
5. Build and browser-test the website before release.

See `docs/PRODUCTION_WORKFLOW.md` for the full operating instructions.
