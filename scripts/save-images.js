// Run this in browser console on generate-og.html to save images
// Or we use it via puppeteer/node approach

const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple approach: read the HTML, use a data URL approach
// Actually let's just create the images with pure Node canvas-less approach
// using SVG -> base64 for the simple icons

const publicDir = path.join(__dirname, '..', 'public');

// Create a simple OG image as SVG then convert
// Since we can't use canvas in Node without deps, let's create SVG-based images

// OG Image as SVG (1200x630)
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="80" y="200" width="4" height="230" fill="#3b82f6"/>
  <text x="110" y="290" fill="white" font-family="Arial,Helvetica,sans-serif" font-size="72" font-weight="bold">TRUCKWYS</text>
  <text x="110" y="350" fill="#94a3b8" font-family="Arial,Helvetica,sans-serif" font-size="32">AI-Powered Fleet Profitability Platform</text>
  <text x="110" y="400" fill="#64748b" font-family="Arial,Helvetica,sans-serif" font-size="24">Built for African Transport Operators</text>
  <text x="110" y="520" fill="#3b82f6" font-family="Arial,Helvetica,sans-serif" font-size="20">truckwys.com</text>
</svg>`;

// Icon SVG (square with TW)
function iconSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size*0.15}" fill="url(#bg)"/>
  <text x="${size/2}" y="${size*0.55}" fill="white" font-family="Arial,Helvetica,sans-serif" font-size="${size*0.4}" font-weight="bold" text-anchor="middle" dominant-baseline="middle">TW</text>
  <circle cx="${size*0.78}" cy="${size*0.25}" r="${size*0.06}" fill="#3b82f6"/>
</svg>`;
}

// Write SVG files (browsers and social platforms can handle PNG better, but for OG we need to convert)
// Actually, OG images MUST be PNG/JPG. Let's use the SVG as-is for now and note this needs conversion.

// For the OG image, write as SVG and we'll use the browser to convert
fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogSvg);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.svg'), iconSvg(180));
fs.writeFileSync(path.join(publicDir, 'icon-192.svg'), iconSvg(192));
fs.writeFileSync(path.join(publicDir, 'icon-512.svg'), iconSvg(512));

console.log('SVG files written. Need to convert to PNG for OG/icons.');
