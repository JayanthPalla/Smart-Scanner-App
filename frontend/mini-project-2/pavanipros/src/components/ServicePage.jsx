import React from 'react';
import './ServicePage.css'; // Import the CSS file for styling
import GlassNavbar from './GlassNavbar.jsx';
import GlassNavBarhel from './GlassNavbarhel.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you have routing set up
import AboutFooter from './AboutFooter.jsx';
import services from '../assets/services.jpg';
const ServicePage = () => {
    let isLoggedIn = false;

    useEffect(() => {
      axios.get('/user/check_authenticated/').then((res)=>{
        isLoggedIn = res.data.is_logged_in;
      })
    }, []);

    return (
        <>
            <div className='services-body'>
                {isLoggedIn} ? <GlassNavbar /> : <GlassNavBarhel />
                <img src={services} alt="" className='services-image'/>
                <div className="services-page">
                    <div className="services-header">
                        <h1>Our Services</h1>
                        <p>Explore our range of scanning solutions tailored to your needs.</p>
                    </div>
                    <div className="services-content">
                        <section className="services-item">
                            <h2>Effortless Mark Entry</h2>
                            <p>Efficiently scan your Exam papers and converting them into digital format for easy storage and access.</p>
                            <Link to="/document-scanning" className="services-link">Read More</Link>
                        </section>
                        <section className="services-item">
                            <h2>Advanced Scanning Technology</h2>
                            <p>Fetching Marks from Exam paper and automatic data entry into excel sheets.</p>
                            <Link to="/ocr" className="services-link">Read More</Link>
                        </section>
                        <section className="services-item">
                            <h2>Secure Data Handling</h2>
                            <p>Sync your scanned documents with cloud storage services for seamless access from anywhere.</p>
                            <Link to="/cloud-integration" className="services-link">Read More</Link>
                        </section>
                        {/* Add more service items as needed */}
                    </div>
                </div>
            </div>
            <AboutFooter/>
        </>
    );
};

export default ServicePage;
