import React, { useState } from 'react';
import './navbar.css'; // Import CSS file for styling
import logo from '../assets/Group 27.png'; // Import logo image
import { Link } from 'react-router-dom';
import './helnav.css';
// Move the commented-out import statement to the top
//import Register from './Register'; // Import Register component

const Helnav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="helnav">
                <img src={logo} alt="nav" id="hel_nav_icon" />
                <div>
                    <ul id="hel_ul">
                        <li><a href="/">Home</a></li>
                        {/* <li><Link to="/how_to_use">How to use</Link></li> */}
                        <li><a href="index.html">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/help">Help</a></li>
                        <li><Link to="/register">Scan</Link></li> {/* Correct path to the Register component */}
                        <li><a href="/profile">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
};
export default Helnav;
