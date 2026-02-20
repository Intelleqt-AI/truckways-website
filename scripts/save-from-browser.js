const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Read base64 data from stdin
let input = '';
process.stdin.on('data', d => input += d);
process.stdin.on('end', () => {
  const data = JSON.parse(input);
  for (const [name, dataUrl] of Object.entries(data)) {
    const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
    const buf = Buffer.from(base64, 'base64');
    const outPath = path.join(publicDir, name);
    fs.writeFileSync(outPath, buf);
    console.log(`Wrote ${name}: ${buf.length} bytes`);
  }
});
