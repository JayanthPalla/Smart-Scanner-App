import React from 'react';
import './footer.css';
import icon from '../assets/Group 28 (1).png';
import whatsapp from '../assets/logos_whatsapp-icon.png'
import twitter from '../assets/Vector (5).png';
import instagram from '../assets/instagram.png';
const Footer=()=>{
    return(
        <>
        <div className='footer'>
        <img src={icon} alt="logo" className="footer_logo"/>
        <div className='footer_div'>
            <div className='footer_grid'>SOLUTIONS
            <p className="Footer_features">Simplify marks Entry</p>
            <p className="Footer_features">Precision Scanning</p>
            </div>
            <div className='footer_grid'>USE CASES
            <p className="Footer_features">Exams marks Entering</p>
            </div>
            <div className='footer_grid'>QUICK LINKS
            <p className="Footer_features"><a href="/help">Help</a></p>
            <p className="Footer_features"><a href="/help">Profile</a></p>
            <p className="Footer_features"><a href="/land">Contact us</a></p>
            <p className="Footer_features"><a href="/login">Home</a></p>
            <p className="Footer_features"><a href="/services">Services</a></p>
            </div>
            <div className='footer_grid'>CONTACT
            <p className="Footer_features">Email:info@smartscanner.com</p>
            <p className="Footer_features"> Phone Number:99XXXXXX90</p>
            <p className="Footer_features">Address:Enim amet lectus laoreet magna vel amet.
 Mattis pulvinar blandit mauris quam morbi vitae amet pretium.</p>
 <img src={whatsapp} className='whatsapp' style={{'height':'30px'}}/>
 <img src={twitter} className='instagram' style={{'height':'30px'}}/>
 <img src={instagram} className='twitter' style={{'height':'30px'}}/>
            </div>
        </div>
        </div>
        </>
    )
};
export default Footer;