#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exts = new Set(['.vue', '.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json', '.md']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.git') continue;
      await walk(full);
    } else if (exts.has(path.extname(e.name))) {
      await normalizeFile(full);
    }
  }
}

async function normalizeFile(file) {
  try {
    const content = await fs.readFile(file, 'utf8');
    const norm = content.normalize('NFC');
    if (norm !== content) {
      await fs.writeFile(file, norm, 'utf8');
      console.log('Normalized:', file);
    }
  } catch (err) {
    console.error('Error processing', file, err.message);
  }
}

(async function main(){
  const root = path.resolve(__dirname, '..');
  console.log('Scanning and normalizing text files under', root);
  await walk(root);
  console.log('Done.');
})();
