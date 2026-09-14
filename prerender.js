import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

const template = fs.readFileSync(templatePath, 'utf-8');
const { render } = await import('./dist-server/entry-server.js');

const routes = [
  {
    path: '/',
    title: 'Diamond Travels | Reliable rides. Thoughtfully arranged.',
    description: 'Premier car rental and travel service in Cuttack, Bhubaneswar, and across Odisha. Airport transfers, outstation cabs, wedding cars, and corporate rentals.'
  },
  {
    path: '/services',
    title: 'Services | Diamond Travels - Cabs, Rentals & Transfers in Odisha',
    description: 'Explore Diamond Travels services: airport transfers, outstation round-trips, city hourly packages, corporate transit, and luxury rentals.'
  },
  {
    path: '/fleet',
    title: 'Our Fleet | Diamond Travels - Sedans, SUVs & Luxury Cars',
    description: 'View our clean, well-maintained fleet including Dzire, Etios, Innova Crysta, Fortuner, Audi, and luxury coaches.'
  },
  {
    path: '/wedding',
    title: 'Wedding Car Rentals | Diamond Travels - Premium Wedding Travel in Odisha',
    description: 'Specialized wedding car rentals, decorated bridal cars, luxury guest convoys, and VIP airport reception services in Odisha.'
  },
  {
    path: '/routes',
    title: 'Popular Routes & Outstation Travel | Diamond Travels',
    description: 'Fixed-rate outstation rides between Bhubaneswar, Cuttack, Puri, Konark, Angul, Sambalpur, and other destinations across Odisha.'
  },
  {
    path: '/gallery',
    title: 'Gallery | Diamond Travels - Real Moments & Fleet Highlights',
    description: 'Browse photos of our vehicles, wedding setups, client journeys, and travel moments across Odisha.'
  },
  {
    path: '/quote',
    title: 'Get a Quote | Diamond Travels - Book Your Ride',
    description: 'Request a customized quote for airport transfers, outstation trips, local rental, or wedding cars. Transparent pricing with no surprises.'
  }
];

console.log('🚀 Starting SSG pre-rendering...');

for (const route of routes) {
  const appHtml = render(route.path);

  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?"\s*\/?>/,
    `<meta name="description" content="${route.description}" />`
  );

  let outFilePath;
  if (route.path === '/') {
    outFilePath = path.resolve(distDir, 'index.html');
  } else {
    const routeDir = path.resolve(distDir, route.path.slice(1));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    outFilePath = path.resolve(routeDir, 'index.html');
  }

  fs.writeFileSync(outFilePath, html, 'utf-8');
  console.log(`  ✓ Pre-rendered: ${route.path} -> ${path.relative(distDir, outFilePath)}`);
}

// Generate 404.html as well for Cloudflare Pages
const notFoundHtml = template.replace('<div id="root"></div>', `<div id="root">${render('/')}</div>`);
fs.writeFileSync(path.resolve(distDir, '404.html'), notFoundHtml, 'utf-8');
console.log('  ✓ Pre-rendered: 404.html fallback');

console.log('✨ SSG pre-rendering completed successfully!');
