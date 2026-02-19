const fs = require('fs');
const path = require('path');

function findLinks(dir) {
  const links = new Set();
  const files = fs.readdirSync(dir, {recursive: true}).filter(f => f.toString().match(/\.(js|jsx|ts|tsx)$/));
  for (const f of files) {
    const content = fs.readFileSync(path.join(dir, f.toString()), 'utf8');
    const matches = content.matchAll(/href=['"](\/[^'"]*|https?:\/\/[^'"]*)['"]/g);
    for (const m of matches) { links.add(m[1]); }
  }
  return [...links].sort();
}

console.log('=== APP LINKS ===');
findLinks('app').forEach(l => console.log(l));
console.log('\n=== COMPONENT LINKS ===');
findLinks('components').forEach(l => console.log(l));
