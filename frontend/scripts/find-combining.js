import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exts = new Set(['.vue', '.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json', '.md']);

function hasCombining(str){
  for(const ch of str){
    const cp = ch.codePointAt(0);
    if((cp>=0x0300 && cp<=0x036F) || (cp>=0x1AB0 && cp<=0x1AFF) || (cp>=0x1DC0 && cp<=0x1DFF) || (cp>=0x20D0 && cp<=0x20FF) || (cp>=0xFE20 && cp<=0xFE2F)) return true;
  }
  return false;
}

async function walk(dir){
  const entries = await fs.readdir(dir, {withFileTypes:true});
  for(const e of entries){
    const full = path.join(dir, e.name);
    if(e.isDirectory()){
      if(e.name==='node_modules' || e.name==='.git') continue;
      await walk(full);
    }else{
      if(exts.has(path.extname(e.name))){
        const txt = await fs.readFile(full,'utf8');
        const lines = txt.split(/\r?\n/);
        for(let i=0;i<lines.length;i++){
          if(hasCombining(lines[i])){
            console.log(full+':'+(i+1)+': '+lines[i]);
          }
        }
      }
    }
  }
}

(async()=>{
  await walk(path.resolve(__dirname,'..'));
  console.log('done');
})();