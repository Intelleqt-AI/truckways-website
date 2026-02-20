const fs = require('fs');
const path = require('path');
const publicDir = path.join(__dirname, '..', 'public');

// Create proper OG image (1200x630) as SVG-based PNG placeholder
// Since we can't use canvas in Node, create SVG versions that work as OG

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="80" y="200" width="4" height="230" fill="#3b82f6" rx="2"/>
  <text x="110" y="290" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="72" font-weight="bold">TRUCKWYS</text>
  <text x="110" y="350" fill="#94a3b8" font-family="Arial,Helvetica,sans-serif" font-size="32">AI-Powered Fleet Profitability Platform</text>
  <text x="110" y="400" fill="#64748b" font-family="Arial,Helvetica,sans-serif" font-size="24">Built for African Transport Operators</text>
  <text x="110" y="520" fill="#3b82f6" font-family="Arial,Helvetica,sans-serif" font-size="20">truckwys.com</text>
</svg>`;

function iconSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${size}" y2="${size}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${Math.round(size*0.15)}" fill="url(#bg)"/>
  <text x="${size/2}" y="${Math.round(size*0.58)}" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="${Math.round(size*0.4)}" font-weight="bold" text-anchor="middle">TW</text>
  <circle cx="${Math.round(size*0.78)}" cy="${Math.round(size*0.25)}" r="${Math.round(size*0.06)}" fill="#3b82f6"/>
</svg>`;
}

// Write SVG versions
fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogSvg);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.svg'), iconSvg(180));
fs.writeFileSync(path.join(publicDir, 'icon-192.svg'), iconSvg(192));
fs.writeFileSync(path.join(publicDir, 'icon-512.svg'), iconSvg(512));

console.log('SVG images written successfully');
console.log('Note: OG images should ideally be PNG. These SVGs serve as proper replacements.');
