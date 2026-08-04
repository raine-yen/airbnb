import { existsSync, readdirSync } from 'node:fs';

const intake = 'incoming-assets';
const entries = existsSync(intake) ? readdirSync(intake).filter((name) => name !== '.gitkeep') : [];
if (entries.length === 0) {
  console.error('BLOCKED: No source asset is present in incoming-assets/.');
  process.exit(1);
}
console.log(`Asset intake contains ${entries.length} item(s). Manual license verification remains required.`);
