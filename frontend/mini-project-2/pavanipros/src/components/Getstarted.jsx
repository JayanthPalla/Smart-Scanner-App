import React from 'react';
import Helnav from './GlassNavbarhel.jsx';
import Dropdown from './Dropdown.jsx';
import './getstarted.css';
import flower from '../assets/robot.jpg';
import profile from '../assets/profile.png';
const Getstarted = () => {
    return (
        <div className='backg'>
            <Helnav />
            <img src={flower} className="flower_vid" />
            <div className="downpart">
            <h1 className="getwelcome">Welcome, let's begin your journey to academic excellence!</h1>
            <p className="selectoptions"> Please select the options below to start entering your marks.</p>
            <div className="Dropdown">
            <Dropdown/>
            </div>
            </div>
        </div>
    );
}

export default Getstarted;
