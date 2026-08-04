# Production Workflow

1. Intake: place an original asset and license evidence in `incoming-assets/`; do not edit it.
2. Audit: inventory files, verify commercial derivative rights, copy approved working material, and block publication if verification fails.
3. Plan: inspect scene hierarchy, choose actual hero spaces, write creative brief and storyboard, then populate `config/shots.json`.
4. Render: create versioned working scenes, preview all cameras, repair documented defects, and render finals only after review.
5. Edit: create vertical/horizontal masters, clean variants, thumbnails, contact sheet, and FFprobe metadata.
6. Review: record at most ten passes in `review/pass-XX/` with score, defects, changes, verification, frames, and logs.
7. Release: run `pnpm quality`, build and browser-check the website, then write the final report with remaining limitations.

Never replace the original source asset. Restart from a clean working copy if iterative scene edits degrade the result.
