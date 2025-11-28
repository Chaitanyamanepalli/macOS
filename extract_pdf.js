import * as pdfjsLib from 'pdfjs-dist';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfPath = path.resolve(__dirname, 'dist/files/RESUME_CHAITU.pdf');

async function extractText() {
    try {
        console.log(`Reading file from: ${pdfPath}`);
        const data = new Uint8Array(fs.readFileSync(pdfPath));

        // In Node.js environment with pdfjs-dist, we might need to mock a worker or use legacy
        // But let's try standard first.

        const loadingTask = pdfjsLib.getDocument({
            data: data,
            // Disable worker for node environment if possible or let it fallback
            disableFontFace: true,
        });

        const pdfDocument = await loadingTask.promise;
        console.log(`Number of pages: ${pdfDocument.numPages}`);

        let fullText = '';
        for (let i = 1; i <= pdfDocument.numPages; i++) {
            const page = await pdfDocument.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += `--- Page ${i} ---\n${pageText}\n`;
        }
        console.log('--- EXTRACTED TEXT ---');
        console.log(fullText);
    } catch (error) {
        console.error('Error extracting text:', error);
    }
}

extractText();
