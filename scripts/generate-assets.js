const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');

// TruckWys pinwheel logo paths
const logoPaths = `
  <path d="M50,8 L65,35 L55,35 L55,45 L45,45 L45,35 L35,35 Z"/>
  <path d="M88,65 L68,50 L68,58 L58,52 L52,62 L62,68 L62,60 L82,75 Z"/>
  <path d="M12,65 L32,50 L32,58 L42,52 L48,62 L38,68 L38,60 L18,75 Z"/>
`;

// Generate icon SVG (square with rounded corners, dark bg, white logo, blue accent)
function makeIconSvg(size) {
  const r = Math.round(size * 0.18);
  const logoScale = size / 100 * 0.55;
  const logoOffset = size * 0.225;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${size}" y2="${size}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${r}" fill="url(#bg)"/>
  <g fill="#ffffff" transform="translate(${logoOffset},${logoOffset}) scale(${logoScale})">
    ${logoPaths}
  </g>
  <circle cx="${size*0.78}" cy="${size*0.22}" r="${size*0.05}" fill="#3b82f6"/>
</svg>`);
}

// Generate OG image SVG (1200x630)
function makeOgSvg() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Grid pattern -->
  <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
    <line x1="0" y1="0" x2="0" y2="630"/><line x1="60" y1="0" x2="60" y2="630"/>
    <line x1="120" y1="0" x2="120" y2="630"/><line x1="180" y1="0" x2="180" y2="630"/>
    <line x1="240" y1="0" x2="240" y2="630"/><line x1="300" y1="0" x2="300" y2="630"/>
    <line x1="360" y1="0" x2="360" y2="630"/><line x1="420" y1="0" x2="420" y2="630"/>
    <line x1="480" y1="0" x2="480" y2="630"/><line x1="540" y1="0" x2="540" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/><line x1="660" y1="0" x2="660" y2="630"/>
    <line x1="720" y1="0" x2="720" y2="630"/><line x1="780" y1="0" x2="780" y2="630"/>
    <line x1="840" y1="0" x2="840" y2="630"/><line x1="900" y1="0" x2="900" y2="630"/>
    <line x1="960" y1="0" x2="960" y2="630"/><line x1="1020" y1="0" x2="1020" y2="630"/>
    <line x1="1080" y1="0" x2="1080" y2="630"/><line x1="1140" y1="0" x2="1140" y2="630"/>
    <line x1="0" y1="60" x2="1200" y2="60"/><line x1="0" y1="120" x2="1200" y2="120"/>
    <line x1="0" y1="180" x2="1200" y2="180"/><line x1="0" y1="240" x2="1200" y2="240"/>
    <line x1="0" y1="300" x2="1200" y2="300"/><line x1="0" y1="360" x2="1200" y2="360"/>
    <line x1="0" y1="420" x2="1200" y2="420"/><line x1="0" y1="480" x2="1200" y2="480"/>
    <line x1="0" y1="540" x2="1200" y2="540"/><line x1="0" y1="600" x2="1200" y2="600"/>
  </g>

  <!-- Logo icon -->
  <g fill="#ffffff" transform="translate(80, 180) scale(1.8)">
    ${logoPaths}
  </g>
  
  <!-- Blue accent -->
  <circle cx="165" cy="190" r="8" fill="#3b82f6"/>
  
  <!-- Text -->
  <text x="290" y="270" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="72" font-weight="bold">TRUCKWYS</text>
  <text x="290" y="330" fill="#94a3b8" font-family="Arial,Helvetica,sans-serif" font-size="30">AI-Powered Fleet Profitability Platform</text>
  <text x="290" y="380" fill="#64748b" font-family="Arial,Helvetica,sans-serif" font-size="22">Built for African Transport Operators</text>
  
  <!-- Bottom bar -->
  <rect x="0" y="580" width="1200" height="50" fill="rgba(59,130,246,0.15)"/>
  <text x="80" y="612" fill="#3b82f6" font-family="Arial,Helvetica,sans-serif" font-size="20">truckwys.com</text>
  <text x="1120" y="612" fill="#475569" font-family="Arial,Helvetica,sans-serif" font-size="16" text-anchor="end">15% margin uplift • 10 days faster payments</text>
</svg>`);
}

async function main() {
  // Generate OG image
  await sharp(makeOgSvg())
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('✅ og-image.png (1200x630)');

  // Generate apple touch icon (180x180)
  await sharp(makeIconSvg(180))
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✅ apple-touch-icon.png (180x180)');

  // Generate icon-192 
  await sharp(makeIconSvg(192))
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✅ icon-192.png (192x192)');

  // Generate icon-512
  await sharp(makeIconSvg(512))
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✅ icon-512.png (512x512)');

  console.log('\nAll assets generated!');
}

main().catch(console.error);
