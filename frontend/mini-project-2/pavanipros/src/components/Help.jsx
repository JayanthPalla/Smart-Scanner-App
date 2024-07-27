import React from 'react';
import GlassNavbar from './GlassNavbar.jsx';
import GlassNavBarhel from './GlassNavbarhel.jsx';
import './help.css'; // Ensure this path is correct
import flower from '../assets/helprobot.jpg'; // Not used, you can remove this line
import helpImage from '../assets/Rectangle 55.png'; // Importing the help image correctly
import AboutFooter from './AboutFooter.jsx';
import axios from 'axios';
import { useEffect } from 'react';


const Help = () => {
    let isLoggedIn = false;

    useEffect(() => {
      axios.get('/user/check_authenticated/').then((res)=>{
        isLoggedIn = res.data.is_logged_in;
      })
    }, []);
    

    return (
        <>
       <img src={flower} className="helpvedio"/>
         <div className="help_Container">
            {isLoggedIn} ? <GlassNavbar /> : <GlassNavBarhel />
            <div className="help-page">
                    <div className="help-header">
                        <h1>Help & Support</h1>
                        <p>Get assistance with your Smart Scanner.</p>
                    </div>
                        <h2 className="advanced-scanning">Advanced Scanning Technology</h2>
                            <p>Effortless Mark Entry utilizes cutting-edge scanning technology to accurately capture marks from various types of documents, including exam answer sheets and surveys. Our advanced scanning algorithms ensure precise data extraction, minimizing errors and improving efficiency in mark processing.</p>
                            <h2 className='secure-data'>Secure Data Handling</h2>
                            <p>We understand the importance of data security, especially when dealing with sensitive information such as exam results. Effortless Mark Entry employs robust security measures to protect your data throughout the scanning and processing stages. We adhere to industry best practices and compliance standards to safeguard your data against unauthorized access and breaches.</p>
                        
                    
                    <div className="help-content">
                        <section className="faq">
                            <h2>Frequently Asked Questions</h2>
                            <p>Find answers to common questions about using our Smart Scanner.</p>
                            {/* Add FAQ content here */}
                        </section>
                        <section className="contact-us">
                            <h2>Contact Us</h2>
                            <p>Reach out to our support team for further assistance.</p>
                            {/* Add contact information or form for contacting support */}
                        </section>
                    </div>
                    </div>
            </div>
           <AboutFooter/>
           
        </>
    );
}

export default Help;
