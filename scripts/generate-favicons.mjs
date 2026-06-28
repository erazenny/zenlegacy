import sharp from "sharp";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const logoPath = path.join(ROOT, "public/logos/ZENLEGACYLOGOPNG.png");
const outDir = path.join(ROOT, "public");

const meta = await sharp(logoPath).metadata();
const cropSize = Math.round(meta.width * 0.22);
const left = Math.round((meta.width - cropSize) / 2);
const top = Math.round(meta.height * 0.04);

const lotus = sharp(logoPath)
  .extract({ left, top, width: cropSize, height: cropSize })
  .trim({ threshold: 10 });

async function onNavy(size) {
  const icon = await lotus
    .clone()
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 12, g: 26, b: 46, alpha: 1 },
    },
  })
    .composite([{ input: icon, gravity: "centre" }])
    .png();
}

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

for (const { name, size } of sizes) {
  const img = await onNavy(size);
  await img.toFile(path.join(outDir, name));
  console.log(`Created ${name}`);
}

const icon32 = await (await onNavy(32)).png().toBuffer();
const icon16 = await (await onNavy(16)).png().toBuffer();

await sharp(icon32).toFile(path.join(outDir, "favicon.ico"));
console.log("Created favicon.ico");

await writeFile(
  path.join(outDir, "site.webmanifest"),
  JSON.stringify(
    {
      name: "ZenLegacy Assurance",
      short_name: "ZenLegacy",
      icons: [
        { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      theme_color: "#0c1a2e",
      background_color: "#0c1a2e",
      display: "standalone",
    },
    null,
    2,
  ),
);
console.log("Created site.webmanifest");
