'use client';

import React from 'react';

// Define your page options
const pages = [
  { label: 'Yearbook 2018', path: 'yearbooks/Yearbook_2018.pdf' },
  { label: 'Yearbook 2019', path: 'yearbooks/Yearbook_2019.pdf' },
  { label: 'Yearbook 2023', path: 'yearbooks/Yearbook_2023.pdf' },
];

export default function Page() {
  // Function to handle opening PDF
  const openPDF = (path: string) => {
    window.open(path, '_blank');
  };

  return (
    <div>
      <h1>Past Yearbooks</h1>
      <ul>
        {pages.map((page, index) => (
          <li key={index} style={{ cursor: 'pointer' }} onClick={() => openPDF(page.path)}>
            {page.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
