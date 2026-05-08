import sharp from "sharp";
import { existsSync } from "fs";
import { join } from "path";

const ASSETS_DIR = "public/assets";

const SIZES = [527, 800, 1200];

const FILES = [
  "slide.avif",
  "home.avif",
  "home1.avif",
  "home2.avif",
  "home3.avif",
  "home4.avif",
];

async function optimize() {
  for (const filename of FILES) {
    const src = join(ASSETS_DIR, filename);

    if (!existsSync(src)) {
      console.warn("⚠️ missing:", filename);
      continue;
    }

    const image = sharp(src);

    for (const size of SIZES) {
      const output = src.replace(".avif", `-${size}.avif`);

      await image
        .resize(size, null, {
          fit: "cover",
          position: "center",
        })
        .avif({
          quality: 45,
          effort: 6,
        })
        .toFile(output);

      console.log(`✓ ${filename} → ${size}px`);
    }
  }

  const logo = join(ASSETS_DIR, "logo.png");

  if (existsSync(logo)) {
    await sharp(logo)
      .resize(72, 72)
      .png({ quality: 80 })
      .toFile(logo.replace(".png", "-72.png"));

    console.log("✓ logo optimisé");
  }
}

optimize();