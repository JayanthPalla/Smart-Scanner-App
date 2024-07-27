import React from 'react';
import './AboutPage.css'; // Import the CSS file for styling
import GlassNavbar from './GlassNavbar.jsx';
import GlassNavBarhel from './GlassNavbarhel.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import ai from '../assets/ai.jpg';
import Contact from './ContactForm.jsx';
import AboutFooter from './AboutFooter.jsx';
const AboutPage = () => {
    let isLoggedIn = false;

    useEffect(() => {
      axios.get('/user/check_authenticated/').then((res)=>{
        isLoggedIn = res.data.is_logged_in;
      })
    }, []);

    return (
        <>
        <div className='aboutbody'>
        {isLoggedIn} ? <GlassNavbar /> : <GlassNavBarhel />
        <div>
            <img src={ai} alt="" className="image"/>
            </div>
        <div className="about-page">
            <div className="about-header">
                <h1>About Our Smart Scanner</h1>
                <p>Welcome to our smart scanner website. We're passionate about revolutionizing the way you scan and digitize documents.</p>
            </div>
            <div className="about-content">
                <section className="web-overview">
                    <h2>Website Overview</h2>
                    <p>We are committed to providing cutting-edge scanning technology that simplifies Marks entry for Faculty.</p>
                </section>
                <section className="mission-statement">
                    <h2>Mission Statement</h2>
                    <p>Our mission is to empower users with efficient and reliable scanning solutions that enhance productivity and streamline workflows.</p>
                </section>
                <section className="founder-info">
                    <h2>Founder Information</h2>
                    <p>Founded by [Founder Name], our team brings together expertise in software development, design, and business management.</p>
                </section>
                
                <section className="customer-benefits">
                    <h2>Customer Benefits</h2>
                    <p>By using our smart scanner, customers can save time, improve smart work using smart scanner, and access their documents from anywhere, at any time.</p>
                </section>
                <section className="contact-info">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or feedback, please don't hesitate to reach out to us at contact@smartscanner.com</p>
                <Contact/>
                </section>
            </div>
        </div>
        </div>
        <AboutFooter/>
        </>
    );
};

export default AboutPage;
