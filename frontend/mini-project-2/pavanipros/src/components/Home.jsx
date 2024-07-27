import React from 'react';
import Helnav from './Helnav.jsx';
import './home.css';
import Card from './Card.jsx';
import GlassNavbarhel from './GlassNavbarhel.jsx';
import profile from '../assets/profile.png';
import {useNavigate} from "react-router-dom";
import flower from '../assets/technology2.mp4';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home=()=>{
    let navigated = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
      axios.get('/user/details/').then((response)=>{
        console.log('user details: ', typeof(response.data));
        setUser(response.data);
      });
    }, []);


    function handleClickgetstarted() {
    navigated("/getstarted");
    }
    return(
        <>
        <div className="whole">
        <GlassNavbarhel/>
        <div className="home">
        <div className='home_body'>
            <div className="hero_vedios">
                   <video src={flower} autoPlay loop muted style={{ filter: 'brightness(60%)' }} className="vedio"/>
            </div>
            <p className='user'>Hey, {user?.full_name}</p>
          <a href="./profile"><img src={profile} className="user_profile"/></a>
            <h1 className='recent'>Recently Scanned</h1>
            <div className='card'>
            <Card header="PUC-1" content="Academic-year:PUC-1,Subject:Mathematics,Semester:1,Year:2024" year="puc1" time="last scanned at 9:00pm" />
            <Card header="BTech-2" content="Academic-year:PUC-1,Subject:Mathematics,Semester:1,Year:2022"  year="puc2" time="last scanned at 4:00am" />
            <Card header="BTech-4" content="Academic-year:BTECH-1,Subject:Discrete Mathematics,Branch:CSE,Semester:1,Year:2022"  year="btech1" time="last scanned at 10:00am" />
            <Card header="BTech-1" content="Academic-year:BTECH-2,Subject:Computer Networks,Branch:CSE,Semester:1,Year:2022"  year="btech2" time="last scanned at 2:00pm" />
            <Card header="BTech-3" content="Academic-year:BTECH-3,Subject:MFDS,Branch:CSE,Semester:2,Year:2022"  year="btech3" time="last scanned at 9:00pm" />
            <Card header="PUC-1" content="Academic-year:BTECH-4,Subject:Machine Learning,Branch:CSE,Semester:1,Year:2022"  year="btech4" time="last scanned at 4:00am" />
            <Card header="BTech-2" content="Academic-year:PUC-2,Subject:Mathematics,Semester:1,Year:2022"  year="puc2" time="last scanned at 10:00am"/>
            <Card header="BTech-4" content="Academic-year:BTECH-1,Subject:BEEE,Branch:CSE,Semester:1,Year:2022"  year="btech1" time="last scanned at 2:00pm"/>
            <Card header="BTech-1" content="Academic-year:BTECH-2,Subject:OS,Branch:CSE,Semester:1,Year:2022"  year="btech2" time="last scanned at 9:00pm"/>
            </div>
            <div className='start_new'>Start New Subject Scanning</div>
            <button type="button" className='get' onClick={handleClickgetstarted}>Get Started</button>
        </div>
        </div>
        </div>
        </>
    )
}
export default Home;