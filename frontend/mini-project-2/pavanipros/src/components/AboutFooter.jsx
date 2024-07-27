import React from 'react';
import './aboutfooter.css';
import icon from '../assets/Group 28 (1).png';
import whatsapp from '../assets/logos_whatsapp-icon.png'
import twitter from '../assets/Vector (5).png';
import instagram from '../assets/instagram.png';
const AboutFooter=()=>{
    return(
        <>
        <div className='aboutfooter'>
        <img src={icon} alt="logo" className="aboutfooter_logo"/>
        <div className='aboutfooter_div'>
            <div className='aboutfooter_grid'>SOLUTIONS
            <p className="aboutFooter_features">Simplify marks Entry</p>
            <p className="aboutFooter_features">Precision Scanning</p>
            </div>
            <div className='aboutfooter_grid'>USE CASES
            <p className="aboutFooter_features">Exams marks Entering</p>
            </div>
            <div className='aboutfooter_grid'>QUICK LINKS
            <p className="aboutFooter_features">Help</p>
            <p className="aboutFooter_features">Profile</p>
            <p className="aboutFooter_features">Contact us</p>
            <p className="aboutFooter_features">Home</p>
            <p className="aboutFooter_features">Services</p>
            </div>
            <div className='aboutfooter_grid'>CONTACT
            <p className="aboutFooter_features">Email:info@smartscanner.com</p>
            <p className="aboutFooter_features"> Phone Number:99XXXXXX90</p>
            <p className="aboutFooter_features">Address:Enim amet lectus laoreet magna vel amet.
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
export default AboutFooter;