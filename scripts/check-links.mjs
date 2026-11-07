// Checks the built site (dist/) for internal links and images that point to missing files.
// Run after `npm run build`:  npm run check
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const pages = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) walk(p); else if (p.endsWith('.html')) pages.push(p);
});
walk(dist);

const missing = new Set();
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src|data-src|data-peek)="(\/[^"#?]*)/g)) {
    const target = join(dist, decodeURIComponent(url));
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    if (!ok) missing.add(`${url}  (in ${page.replace(dist, '')})`);
  }
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${id}"`)) missing.add(`#${id}  (in ${page.replace(dist, '')})`);
  }
}
console.log(`Checked ${pages.length} pages.`);
if (missing.size) { console.log('Broken links:\n' + [...missing].join('\n')); process.exit(1); }
console.log('No broken internal links or images.');
