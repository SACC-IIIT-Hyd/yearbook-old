"use client";

import React, { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import styles from "../../styles/pastYearbook.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`;

type PDFFile = string | File | null;

export default function Component() {
  const [yearbooks, setYearbooks] = useState([
    { id: 1, title: 'Yearbook 2018', file: 'yearbooks/Yearbook_2018.pdf' },
    { id: 2, title: 'Yearbook 2019', file: 'yearbooks/Yearbook_2019.pdf' },
    { id: 3, title: 'Yearbook 2023', file: 'yearbooks/Yearbook_2023.pdf' }
  ]);
  const [selectedYearbook, setSelectedYearbook] = useState<PDFFile>(yearbooks[0].file);
  const [selectedYearbookId, setSelectedYearbookId] = useState(null);
  const [numPages, setNumPages] = useState<number>();
  const [pageScale, setPageScale] = useState(1);
  const [pageWidth, setPageWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [aspectRatio, setAspectRatio] = useState("1 / 1.414");
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  function onPageLoadSuccess(page) {
    const pageOriginalHeight = page.getViewport({ scale: 1 }).height;
    const pageOriginalWidth = page.getViewport({ scale: 1 }).width;
    const viewportHeight = window.innerHeight * 0.75;
    const scale = viewportHeight / pageOriginalHeight;
    const scaledWidth = pageOriginalWidth * scale;
  
    setPageScale(scale);
    setPageWidth(scaledWidth);
  }

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleYearbookChange = (id, pdf) => {
    setSelectedYearbookId(id);
    setSelectedYearbook(pdf);
    setCurrentPage(1);

    if (containerRef) {
      containerRef.style.display = 'block';
    }
  };

  return (
    <div>
      <ul>
        {yearbooks.map((yearbook) => (
          <li key={yearbook.id} 
              onClick={() => handleYearbookChange(yearbook.id, yearbook.file)}
              style={{ cursor: 'pointer'}}>
            {yearbook.title}
          </li>
        ))}
      </ul>

      <div className={styles.pdfViewer} ref={setContainerRef}>
        <div className={styles.navigationButtons}>
          <button onClick={goToPrevPage} disabled={currentPage <= 1}>Prev</button>
          <div style={{ width: "69px" }}></div>
          <input
            className={styles.pageNumberInput}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={currentPage}
            onChange={(e) => {
              const pageNumber = Number(e.target.value);
              if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= numPages) {
                setCurrentPage(pageNumber);
              }
            }}
            min={1}
            max={numPages}
          />
          <div style={{ color: "white" }}> out of {numPages}</div>
          <div style={{ width: "69px" }}></div>
          <button onClick={goToNextPage} disabled={currentPage >= numPages}>Next</button>
        </div>
        <div style={{height: "7px"}}></div>
        <div className={styles.pdfContainer}>
          <Document file={selectedYearbook} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              key={`page_${currentPage}`}
              pageNumber={currentPage}
              onLoadSuccess={onPageLoadSuccess}
              scale={pageScale}
            />
          </Document>
        </div>
        <div style={{height: "37px"}}></div>
      </div>
    </div>
  );
}