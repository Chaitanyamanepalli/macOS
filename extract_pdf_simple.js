import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfPath = path.resolve(__dirname, 'dist/files/RESUME_CHAITU.pdf');

async function extract() {
    try {
        console.log(`Reading: ${pdfPath}`);
        const dataBuffer = fs.readFileSync(pdfPath);
        const data = await pdf(dataBuffer);
        console.log('--- START TEXT ---');
        console.log(data.text);
        console.log('--- END TEXT ---');
    } catch (error) {
        console.error('Error:', error);
    }
}

extract();
