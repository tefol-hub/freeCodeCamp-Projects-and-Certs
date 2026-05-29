#!/usr/bin/env node

// npm install sharp
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const TARGET_W = 1200, TARGET_H = 630;
const MAX_BYTES = 1 * 1024 * 1024;

async function compressThumb(srcPath) {
  const ext = path.extname(srcPath).toLowerCase();
  const supported = [".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff"];
  if (!supported.includes(ext)) return;

  const outPath = srcPath.replace(/(\.[^.]+)$/, "_thumb.png");

  // Aspect fill: cover + center crop
  let pipeline = sharp(srcPath)
    .resize(TARGET_W, TARGET_H, { fit: "cover", position: "top" });

  // Try compression levels 1–9
  for (let level = 1; level <= 9; level++) {
    const buf = await pipeline.png({ compressionLevel: level }).toBuffer();
    if (buf.length <= MAX_BYTES) {
      fs.writeFileSync(outPath, buf);
      console.log(`✓  ${outPath}  (${(buf.length/1024).toFixed(0)} KB)`);
      return;
    }
  }
  console.warn(`⚠  ${outPath}  could not reach 1 MB`);
}

// CLI: node compress_thumb.js media/ photo.jpg
const args = process.argv.slice(2);
for (const arg of args) {
  const stat = fs.statSync(arg);
  if (stat.isDirectory()) {
    fs.readdirSync(arg).forEach(f => compressThumb(path.join(arg, f)));
  } else {
    compressThumb(arg);
  }
}