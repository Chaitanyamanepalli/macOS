import { useRef, useState, useEffect } from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf"

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();
const Resume = () => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: null, height: null });

    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            if (entries[0]) {
                const { width, height } = entries[0].contentRect;
                setDimensions({ width, height });
            }
        });

        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>RESUME_CHAITU.pdf</h2>
                <a
                    href="files/RESUME_CHAITU.pdf"
                    download
                    className="cursor-pointer"
                    title="Download Resume" >
                    <Download className="icon" />
                </a>
            </div>
            <div ref={containerRef} className="h-[calc(100%-3rem)] w-full bg-gray-100 flex justify-center items-center overflow-hidden">
                <Document file="files/RESUME_CHAITU.pdf" className="flex justify-center items-center">
                    <Page pageNumber={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        height={dimensions.height} />
                </Document>
            </div>

        </>
    );
};
const ResumeWindow = WindowWrapper(Resume, "resume")
export default ResumeWindow;
