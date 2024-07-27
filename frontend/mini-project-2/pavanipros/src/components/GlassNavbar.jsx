import React, { useState } from 'react';
import './glassnavbar.css'; // Import CSS file for styling
import logo from '../assets/Group 28 (1).png'; // Import logo image
import { Link } from 'react-router-dom';
//import './How_to_use'; // Move the commented-out import statement to the top
//import Register from './Register'; // Import Register component

const GlassNavbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navg">
                <img src={logo} alt="nav" id="navg_icon" />
                <div>
                    <ul id="ulg">
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/how_to_use">How to use</Link></li> */}
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/help">Help</Link></li>
                        <li><Link to="/register">Register</Link></li> {/* Correct path to the Register component */}
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
};
export default GlassNavbar;
