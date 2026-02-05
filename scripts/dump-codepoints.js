import fs from 'fs/promises';
import path from 'path';

const target = 'Giá trị cốt lõi';
const file = path.resolve('src/components/HomePage.vue');
(async()=>{
  const txt = await fs.readFile(file,'utf8');
  const lines = txt.split(/\r?\n/);
  for(let i=0;i<lines.length;i++){
    if(lines[i].includes('Giá trị')){
      const s = lines[i];
      console.log('Line',i+1,':',s);
      for(const ch of s){
        console.log(ch, ' U+'+ch.codePointAt(0).toString(16).toUpperCase());
      }
    }
  }
})();