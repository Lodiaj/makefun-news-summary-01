// This program creates a new file entry.txt in the output directory from the contents of summary.txt
// This program creates a new file entry.txt in the output directory from the contents of summary.txt
import * as fs from 'node:fs';


import * as path from 'node:path';
fs.copyFileSync(new URL('./summary.txt', import.meta.url), path.join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
