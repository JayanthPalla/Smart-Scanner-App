import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import './partially_scanned.css';
import Excelsheet from './ExcelSheet.jsx';
//import GlassNavbarhel from './GlassNavbarhel.jsx';

import flower from '../assets/flower.mp4';
import './hi.css';
const Partially_scanned = () => {
  return (
    <>
    <div className='part'>
   {/* <video src={flower} autoPlay loop muted style={{ filter: 'brightness(60%)' }}/>*/}
  </div>
    <div className='scanning_div'>
<div className='cam'>
<Webcam className="webcam"/>
</div>
<div className='excel'>
<Excelsheet/>
</div>
</div>
</>
  );
};

export default Partially_scanned;
