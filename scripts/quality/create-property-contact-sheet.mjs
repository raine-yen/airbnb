import { createRequire } from "node:module";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const requireFromWebsite = createRequire(
  path.resolve("website/package.json"),
);
const sharp = requireFromWebsite("sharp");

const [sourceDir, outputFile] = process.argv.slice(2);
if (!sourceDir || !outputFile) {
  console.error("Usage: node create-property-contact-sheet.mjs <source> <output>");
  process.exit(1);
}

const files = (await readdir(sourceDir))
  .filter((file) => /\.(avif|webp|png|jpe?g)$/i.test(file))
  .sort((a, b) => a.localeCompare(b));
const tileWidth = 240;
const tileHeight = 190;
const columns = 5;
const rows = Math.ceil(files.length / columns);
const composites = [];

for (const [index, file] of files.entries()) {
  const image = await sharp(path.join(sourceDir, file))
    .rotate()
    .resize(tileWidth, 150, { fit: "cover", position: "attention" })
    .jpeg({ quality: 78 })
    .toBuffer();
  const label = Buffer.from(
    `<svg width="${tileWidth}" height="40"><rect width="100%" height="100%" fill="#151a18"/><text x="10" y="16" fill="#ffffff" font-family="Arial" font-size="12">${String(index + 1).padStart(2, "0")}</text><text x="38" y="16" fill="#aab5ae" font-family="Arial" font-size="8">${file.slice(0, 26)}</text><text x="10" y="31" fill="#dbe34b" font-family="Arial" font-size="8">PRIVATE SOURCE REVIEW</text></svg>`,
  );
  const tile = await sharp({
    create: { width: tileWidth, height: tileHeight, channels: 3, background: "#151a18" },
  })
    .composite([{ input: image, top: 0, left: 0 }, { input: label, top: 150, left: 0 }])
    .jpeg({ quality: 82 })
    .toBuffer();
  composites.push({ input: tile, left: (index % columns) * tileWidth, top: Math.floor(index / columns) * tileHeight });
}

await mkdir(path.dirname(outputFile), { recursive: true });
await sharp({
  create: { width: columns * tileWidth, height: rows * tileHeight, channels: 3, background: "#faf8f3" },
})
  .composite(composites)
  .jpeg({ quality: 88, chromaSubsampling: "4:4:4" })
  .toFile(outputFile);

console.log(`Created ${outputFile} from ${files.length} images.`);
