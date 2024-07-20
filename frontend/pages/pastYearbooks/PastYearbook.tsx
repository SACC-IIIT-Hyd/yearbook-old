'use client';

import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import './PastYearbook.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const maxWidth = 800;

type PDFFile = string | File | null;

interface PastYearbookProps {
  fileName: PDFFile;
}

function extractFileName(file: PDFFile): string {
  if (typeof file === 'string') {
    return file.split('/').pop() || 'Default Title';
  }
  return 'Default Title';
}

export default function PastYearbook({ fileName }: PastYearbookProps) {
  const [file, setFile] = useState<PDFFile>(fileName);
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="pdfViewer">
      <header>
        <h1>{extractFileName(fileName)}</h1>
      </header>

      <div className="container">
        <div className="containerDocument">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={maxWidth}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
