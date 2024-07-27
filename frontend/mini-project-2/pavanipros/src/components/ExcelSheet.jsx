import React from 'react';
import * as XLSX from 'xlsx';

import './excelsheet.css'; // Import your CSS file for styling

const ExcelSheet = () => {
  // Sample data
  const data = [
   
    [1,15],
    [2,11],
    [3,10],
    [1,7],
    [2,14],
    [3,9], 
    [1,14],
    [2,14],
    [3,15],
    [1, 15],
    [1,15],
    [1,15],
    [1, 15]
  ];

  // Create a new workbook
  const wb = XLSX.utils.book_new();

  // Add a worksheet
  const ws = XLSX.utils.aoa_to_sheet(data);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Export the workbook to a file
  const exportToExcel = () => {
    XLSX.writeFile(wb, 'sample.xlsx');
  };

  return (
    <div className="container">
      {/* Left div for Excel sheet */}
      <div className="excel-container">
        <p className='caption'>Entering the marks is in progress...</p>
        <table className="excel-table">
          <thead>
            <tr>
              <th>ID_No</th>
            
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={exportToExcel} className='download_button'>Download Sheet</button>
      </div>
     
     
    </div>
  );
};

export default ExcelSheet;
