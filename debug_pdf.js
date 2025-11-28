import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pdfPath = path.resolve(__dirname, 'dist/files/RESUME_CHAITU.pdf');

console.log('Type of pdfParse:', typeof pdfParse);
if (typeof pdfParse === 'object') {
    console.log('pdfParse keys:', Object.keys(pdfParse));
}

async function run() {
    try {
        console.log(`Reading: ${pdfPath}`);
        const buffer = fs.readFileSync(pdfPath);

        let parser = pdfParse;
        if (typeof parser !== 'function' && parser.default) {
            parser = parser.default;
        }

        if (typeof parser === 'function') {
            const data = await parser(buffer);
            console.log('--- START TEXT ---');
            console.log(data.text);
            console.log('--- END TEXT ---');
        } else {
            console.log('Could not find parser function. parser is:', parser);
        }
    } catch (e) {
        console.error('Error:', e);
    }
}
run();
