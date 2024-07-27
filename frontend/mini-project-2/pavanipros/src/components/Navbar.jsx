import React, { useState } from 'react';
import './navbar.css'; // Import CSS file for styling
import logo from '../assets/Group 27.png'; // Import logo image
import { Link } from 'react-router-dom';
//import './How_to_use'; // Move the commented-out import statement to the top
//import Register from './Register'; // Import Register component

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="nav">
                <img src={logo} alt="nav" id="nav_icon" />
                <div>
                    <ul id="ul">
                        <li><a href="/">Home</a></li>
                        {/* <li><Link to="/how_to_use">How to use</Link></li> */}
                        <li><a href="index.html">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/help">Help</a></li>
                        <li><Link to="/register">Register</Link></li> {/* Correct path to the Register component */}
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
};
export default Navbar;
