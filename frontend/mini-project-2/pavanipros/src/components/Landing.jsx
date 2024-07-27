import React from 'react';
import GlassNavbar from './GlassNavbar.jsx';
import Carousel from './Carousel';
import guide1 from '../assets/guide.png';
import img from '../assets/Ellipse 9.png';
import img2 from '../assets/Ellipse 10.png';
import icon1 from '../assets/Group.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import Location from '../assets/image 1.png';
import logo from '../assets/Group 27.png';
//import ParallaxComponent from './ParallaxComponent.jsx'
import './landing.css'
import ContactForm from './ContactForm';
import Footer from './Footer.jsx';
import rect from '../assets/carousel_2 (3).png';
const Landing = () => {
    return (
        <>
            <div className='Landing'>
                <GlassNavbar />
                <div className='smart_welcome'>Welcome to Smart Scanner Website!!!!</div>
                <img src={rect}/>
                {/*<ParallaxComponent/>*/}
                <h2 className="guide_head">About our Guide</h2>
                <div className="guide">
                    <img src={guide1} alt="guide" className="guide_img" />
                    <p className="about_guide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi eaque consequatur sequi ipsa, cupiditate neque necessitatibus! Voluptas cum vitae facere nemo libero, hic aliquid soluta, qui suscipit quas quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a minima ad, deleniti atque, harum voluptate excepturi rem rerum quibusdam quasi? Consequatur deleniti natus quisquam dolore asperiores corporis esse amet.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, et harum id ipsum cumque deleniti nobis iste, magni sunt earum maiores </p>
    </div>
                <div className="services">
                    <h2 className="services_head"> Featured Services or Benefits</h2>
                    <h4 className="explore">Explore Our Services</h4>
                    <p className="explore_data"><div className=''>
                    Unlock the full potential of our exam management solutions. Our comprehensive services are designed to streamline
                        your institution's examination processes, offering a range of benefits such as</div></p>
                    <div className="new_services">
                    <div className="services_div">
                        <div className="service-item"><img src={icon1} alt="" className="icons" /></div>
                        <div className="service-item"><img src={icon2} alt="" className="icons" /></div>
                        <div className="service-item"><img src={icon3} alt="" className="icons" /></div>
                    </div>
                    <div className="service_names">
                        <div>
                            <p className="p1">Effortless Mark Entry</p>
                            <a href="#readmore" className="read_more">ReadMore</a>
                        </div>
                        <div>
                            <p className="p2">Advanced Scanning Technology</p>
                            <a href="#readmore" className="read_more1">ReadMore</a>
                        </div>
                        <div>
                            <p className="p3">Secure Data Handling</p>
                            <a href="#readmore" className="read_more2">ReadMore</a>
                        </div>
                    </div>
                    </div>
                    
                 
                </div>
                <div className='contact_us'>
                    <h2 className="touch">Get in Touch With Us</h2>
                    <p className="touch_data">Have questions or ready to explore how our exam management solutions can benefit your institution?
                        Reach out to us! Our team is here to assist you</p>
                </div>
                <div className="touch_Form">
                    <ContactForm />
                </div>
                <div className='footer_land'>
                <Footer/>
                </div>
                
            </div>
        </>
    )
};
export default Landing;
