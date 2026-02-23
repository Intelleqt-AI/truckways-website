const sharp = require('sharp');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');

async function main() {
  const logoPath = path.join(imagesDir, 'truckwys-logo-transparent.png');
  
  // Get logo metadata to understand dimensions
  const meta = await sharp(logoPath).metadata();
  console.log('Logo dimensions:', meta.width, 'x', meta.height);
  
  // The logo is wide (icon + text). We need to extract just the icon part (left side)
  // Typically the icon is roughly square and on the left
  const iconSize = Math.min(meta.width, meta.height);
  
  // Extract left portion (the pinwheel icon) - crop to square from left
  const iconBuffer = await sharp(logoPath)
    .extract({ left: 0, top: 0, width: Math.round(meta.height * 1.1), height: meta.height })
    .png()
    .toBuffer();
  
  // Generate favicon as 32x32 PNG
  await sharp(iconBuffer)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('✅ favicon.png (32x32)');

  // Generate apple touch icon (180x180) - icon on white bg
  await sharp(iconBuffer)
    .resize(160, 160, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: { r: 255, g: 255, b: 255, alpha: 255 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✅ apple-touch-icon.png (180x180)');

  // Generate icon-192
  await sharp(iconBuffer)
    .resize(172, 172, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: { r: 255, g: 255, b: 255, alpha: 255 } })
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✅ icon-192.png (192x192)');

  // Generate icon-512
  await sharp(iconBuffer)
    .resize(472, 472, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({ top: 20, bottom: 20, left: 20, right: 20, background: { r: 255, g: 255, b: 255, alpha: 255 } })
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✅ icon-512.png (512x512)');

  // Also create favicon.svg from the icon
  // Since we can't easily vectorize, let's create a proper SVG favicon link to PNG instead
  console.log('\nAll icons generated from actual TruckWys logo!');
}

main().catch(console.error);
