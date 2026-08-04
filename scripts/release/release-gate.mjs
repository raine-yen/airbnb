import { existsSync, readFileSync } from 'node:fs';

const required = [
  'docs/ASSET_LICENSE.md',
  'docs/QUALITY_RUBRIC.md',
  'reports/FINAL_QUALITY_REPORT.md',
  'exports/vertical/atria-house-demo-9x16.mp4',
  'exports/horizontal/atria-house-demo-16x9.mp4',
  'website/package.json'
];
const missing = required.filter((file) => !existsSync(file));
const license = existsSync('docs/ASSET_LICENSE.md') ? readFileSync('docs/ASSET_LICENSE.md', 'utf8') : '';
if (missing.length || /BLOCKED/.test(license)) {
  console.error('RELEASE BLOCKED');
  if (missing.length) console.error(`Missing: ${missing.join(', ')}`);
  if (/BLOCKED/.test(license)) console.error('Asset license is not verified.');
  process.exit(1);
}
console.log('Release gate prerequisites found. Run video and website checks before public release.');
