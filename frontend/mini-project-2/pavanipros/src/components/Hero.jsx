import React from 'react';
import night_sky from '../assets/robotflower.mp4';
import './hero.css';
import GlassCarousel from './GlassCarousel';
import {useNavigate} from "react-router-dom";
const Hero=()=>{
    const images = [
        '../assets/Rectangle 54.png',
        '../assets/Rectangle 55.png',
        '../assets/Rectangle 62.png',
        // Add more image paths as needed
      ];
    let navigated = useNavigate();
    function handleClickgetstarted() {
    navigated("/register");
    }
    return(
        <>
        <div className="hero-container">
        <GlassCarousel images={images} />
        <video src={night_sky} autoPlay loop muted style={{ filter: 'brightness(50%)' }} className="vedio"/>
        <h1 className='hero-title'>Welcome to Smart Scanner Website</h1>
        <p id="value"><i>Automate scanning and data entry, giving educators
 more time for impactful teaching and student </i>
support</p>
<p id="value"><i>Simplify result management – from scanned papers to 
organized Excel sheets, experience seamless and 
accurate data entry</i></p>
<p id="value"><i>Ensure precision in every exam detail.
 Our cutting-edge scanning technology eliminates
 errors for reliable and accurate results."</i></p>
 <p id="value"><i>Automate scanning and data entry, giving educators
 more time for impactful teaching and student 
support</i></p>
        <div className="hero-btns">
            <button type="button" className="hero-btn" onClick={handleClickgetstarted}>Get Started</button>
        </div>
        
        </div>
        </>
    )
}
export default Hero;