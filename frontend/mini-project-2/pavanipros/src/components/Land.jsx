import React,{useRef} from 'react';
import GlassNavbar from './GlassNavbar.jsx';
import Contact from './ContactForm.jsx'
import Hero from './Hero.jsx';
import Footer from './Footer.jsx';
import guide1 from '../assets/guide.png';
import icon1 from '../assets/Group.png';
import icon2 from '../assets/Group (1).png';
import icon3 from '../assets/Vector (4).png';
import './land.css';
const Landing = () => {

    return (
        <>
        <div className="finalland">
        <GlassNavbar />
       <Hero/>
       <div className='landbody'>
       <h2 className="guide_head">About our Guide</h2>
       <img src={guide1} alt="guide" className="guide_img" />
                <div className="guide">
                    <p className="about_guide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi eaque consequatur sequi ipsa, cupiditate neque necessitatibus! Voluptas cum vitae facere nemo libero, hic aliquid soluta, qui suscipit quas quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a minima ad, deleniti atque, harum voluptate excepturi rem rerum quibusdam quasi? Consequatur deleniti natus quisquam dolore asperiores corporis esse amet.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, et harum id ipsum cumque deleniti nobis iste, magni sunt earum maiores </p>
                    <p className="about_guide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi eaque consequatur sequi ipsa, cupiditate neque necessitatibus! Voluptas cum vitae facere nemo libero, hic aliquid soluta, qui suscipit quas quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a minima ad, deleniti atque, harum voluptate excepturi rem rerum quibusdam quasi? Consequatur deleniti natus quisquam dolore asperiores corporis esse amet.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, et harum id ipsum cumque deleniti nobis iste, magni sunt earum maiores </p>
                    <p className="about_guide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi eaque consequatur sequi ipsa, cupiditate neque necessitatibus! Voluptas cum vitae facere nemo libero, hic aliquid soluta, qui suscipit quas quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a minima ad, deleniti atque, harum voluptate excepturi rem rerum quibusdam quasi? Consequatur deleniti natus quisquam dolore asperiores corporis esse amet.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, et harum id ipsum cumque deleniti nobis iste, magni sunt earum maiores </p>
    </div>
      <div className="services">
                    <h2 className="services_head"> Featured Services or Benefits</h2>
                    <h4 className="explore">Explore Our Services</h4>
                    <p className="explore_data"><div className='matter'>
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
                            <button type="button" className="read_more"><a href="/register" className="let">Lets Start</a></button>
                        </div>
                        <div>
                            <p className="p2">Advanced Scanning Technology</p>
                            <button type="button" className="read_more1"><a href="/register" className="let">Lets Start</a></button>
                        </div>
                        <div>
                            <p className="p3">Secure Data Handling</p>
                            <button type="button" className="read_more2"><a href="/register" className="let">Lets Start</a></button>
                        </div>
                    </div>
                    </div>
            </div>
            <div className='contact_us'>
                    <h2 className="touch">Get in Touch With Us</h2>
                    <p className="touch_data">Have questions or ready to explore how our exam management solutions can benefit your institution?
                        Reach out to us! Our team is here to assist you</p>
                </div>
            <div className='contactor'>
            <Contact/>
            </div>
            </div>
            <div className="landfooter">
            <Footer/>
            </div>
           
            </div>
        </>
    )
};

export default Landing;