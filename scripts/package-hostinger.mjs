import {cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source=path.join(root,'dist/client');
for(const file of ['index.html','.htaccess','assets','brand','fonts']) {
  if(!existsSync(path.join(source,file))) throw new Error(`Missing built file: ${file}. Run npm run build first.`);
}
const output=path.join(root,'deploy/hostinger');
// This directory contains only generated output from this script.
rmSync(output,{recursive:true,force:true});
mkdirSync(output,{recursive:true});
cpSync(source,output,{recursive:true});
const zip=path.join(root,'deploy/CropEvidence-hostinger.zip');
rmSync(zip,{force:true});
execFileSync('zip',['-qr',zip,'.'],{cwd:output});
if(readdirSync(output).some(name=>['src','node_modules','server','.openai'].includes(name))) throw new Error('Source or server files found in static deployment.');
console.log(`Hostinger files: ${output}`);
console.log(`Upload ZIP: ${zip} (${(statSync(zip).size/1024/1024).toFixed(2)} MB)`);

