const http = require('http');

const localPaths = [
  '/', '/about', '/contact', '/get-started', '/blogs', '/privacy', '/terms',
  '/dashboard', '/dashboard/alerts',
  '/#capital', '/#fleet-performance', '/#invoice-cashflow', '/#pricing', '/#quote-ai', '/#testimonials',
  '/sitemap.xml', '/robots.txt'
];

const externalUrls = [
  'https://truck-flow-quote-pro.vercel.app/',
  'https://twitter.com/truckwys',
  'https://www.linkedin.com/in/truckwys-a8519239a',
  'https://www.merchantcapital.co.za/'
];

async function checkLocal(p) {
  const urlPath = p.split('#')[0] || '/';
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3000' + urlPath, { timeout: 10000 }, (res) => {
      resolve({ path: p, status: res.statusCode });
    });
    req.on('error', (e) => resolve({ path: p, status: 'ERROR: ' + e.message }));
    req.on('timeout', () => { req.destroy(); resolve({ path: p, status: 'TIMEOUT' }); });
  });
}

async function checkExternal(url) {
  const mod = require('https');
  return new Promise((resolve) => {
    const req = mod.get(url, { timeout: 10000, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ path: url, status: res.statusCode });
    });
    req.on('error', (e) => resolve({ path: url, status: 'ERROR: ' + e.message }));
    req.on('timeout', () => { req.destroy(); resolve({ path: url, status: 'TIMEOUT' }); });
  });
}

(async () => {
  console.log('=== LOCAL PAGES ===');
  for (const p of localPaths) {
    const r = await checkLocal(p);
    const icon = r.status === 200 ? '✅' : '❌';
    console.log(icon + ' ' + r.status + ' → ' + r.path);
  }
  console.log('\n=== EXTERNAL LINKS ===');
  for (const u of externalUrls) {
    const r = await checkExternal(u);
    const icon = (r.status >= 200 && r.status < 400) ? '✅' : '❌';
    console.log(icon + ' ' + r.status + ' → ' + r.path);
  }
})();
