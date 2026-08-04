---
name: asset-audit
description: Inspect source property assets and license evidence before any public render work.
---

1. Read `incoming-assets/` without modifying it.
2. Record every file, model title, creator, source URL, license text, texture reference, and missing dependency.
3. Preserve license/README copies in `source-assets/licenses/`.
4. Write `docs/ASSET_INVENTORY.md`, `docs/ASSET_LICENSE.md`, and `reports/asset-audit.json`.
5. Mark publishing BLOCKED when commercial derivative permission or attribution wording cannot be verified.
