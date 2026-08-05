import { createRequire } from "node:module";
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";

const requireFromWebsite = createRequire(path.resolve("website/package.json"));
const sharp = requireFromWebsite("sharp");

const propertyRoot = path.resolve("properties/caldeira-estate");
const sourceRoot = path.join(propertyRoot, "00-original-images");
const selectedRoot = path.join(propertyRoot, "01-selected-images");
const stillRoot = path.join(propertyRoot, "04-edit", "stills");
const shots = [
  { source: "1042c344-54e7-4811-8aad-9856c56febc7.avif", slug: "estate-day" },
  { source: "4ff8db8e-8aaf-4780-ba07-a6f11f78ae2b.avif", slug: "pool-sunset" },
  { source: "81fc2995-f5e6-40d0-8e35-fd0880a387d3.avif", slug: "estate-dusk" },
];

await mkdir(selectedRoot, { recursive: true });
await mkdir(stillRoot, { recursive: true });

for (const [index, shot] of shots.entries()) {
  const number = String(index + 1).padStart(2, "0");
  const source = path.join(sourceRoot, shot.source);
  await copyFile(source, path.join(selectedRoot, `${number}-${shot.slug}.avif`));

  const background = await sharp(source)
    .rotate()
    .resize(1080, 1920, { fit: "cover", position: "attention" })
    .blur(28)
    .modulate({ brightness: 0.48, saturation: 0.72 })
    .jpeg({ quality: 90 })
    .toBuffer();
  const foreground = await sharp(source)
    .rotate()
    .resize(960, 900, { fit: "inside", withoutEnlargement: false })
    .sharpen({ sigma: 0.5 })
    .jpeg({ quality: 94, chromaSubsampling: "4:4:4" })
    .toBuffer();
  const foregroundMeta = await sharp(foreground).metadata();
  const top = Math.round((1920 - foregroundMeta.height) / 2 - 30);
  const left = Math.round((1080 - foregroundMeta.width) / 2);
  const overlay = Buffer.from(`
    <svg width="1080" height="1920">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".5"/><stop offset=".18" stop-color="#000" stop-opacity="0"/><stop offset=".72" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".72"/></linearGradient></defs>
      <rect width="1080" height="1920" fill="url(#g)"/>
      <rect x="52" y="52" width="976" height="80" rx="0" fill="#151a18" fill-opacity=".82"/>
      <text x="78" y="102" fill="#dbe34b" font-family="Arial" font-size="24" font-weight="700" letter-spacing="2">PRIVATE CONCEPT · RIGHTS UNVERIFIED</text>
      <text x="70" y="1680" fill="#ffffff" font-family="Arial" font-size="74" font-weight="700" letter-spacing="-2">CALDEIRA ESTATE</text>
      <text x="72" y="1732" fill="#dbe34b" font-family="Arial" font-size="25" font-weight="700" letter-spacing="3">6-SECOND MOTION STUDY</text>
      <text x="72" y="1835" fill="#ffffff" fill-opacity=".78" font-family="Arial" font-size="22" letter-spacing="2">NOT FOR PUBLICATION</text>
      <text x="1008" y="1835" text-anchor="end" fill="#ffffff" fill-opacity=".78" font-family="Arial" font-size="22">${number} / 03</text>
    </svg>`);

  await sharp(background)
    .composite([
      { input: foreground, left, top },
      { input: overlay, left: 0, top: 0 },
    ])
    .jpeg({ quality: 94, chromaSubsampling: "4:4:4" })
    .toFile(path.join(stillRoot, `shot-${number}.jpg`));
}

console.log(`Prepared ${shots.length} private-concept shots in ${stillRoot}`);
