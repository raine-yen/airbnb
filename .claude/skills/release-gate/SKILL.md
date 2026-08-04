---
name: release-gate
description: Run all production validations and block unsupported public release.
---

Run `pnpm quality`, website build and browser smoke checks, FFprobe metadata validation, file/disclosure/attribution checks, and Git secret checks. Generate the final report. Release only with every required gate, no critical defect, verified license, and evidence-backed 100/100; otherwise report the block and limitations.
