import React from 'react';
import './newexcel.css';
const Newexcel = () => {
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
            {/* Render an empty row */}
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
            
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td></td>
              <td></td>
              
            </tr>
            {/* You can add more empty rows here if needed */}
          </tbody>
        </table>
        <button className='download_button'>Download Sheet</button>
      </div>
      {/* Right div for camera feed */}
    </div>
  );
};

export default Newexcel;
