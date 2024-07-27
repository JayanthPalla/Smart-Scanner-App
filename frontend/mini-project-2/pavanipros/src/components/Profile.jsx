import React from 'react';
import { useEffect, useState } from 'react';
import './profile.css';
import GlassNavbarhel from './GlassNavbarhel.jsx';
import profile from '../assets/profile.png';
import hand from '../assets/Vectary texture.png';
import sea from '../assets/flower.mp4';
import flower from '../assets/robot.jpg';
import axios from 'axios';


const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      axios.get('/user/details/').then((response)=>{
        console.log('user details: ', typeof(response.data));
        setUser(response.data);
      });
    }, []);
    

    return (
        <>
            <GlassNavbarhel/>
            <div className='backpro'>
            <video src={flower} autoPlay loop muted style={{ filter: 'brightness(60%)' }}/>
            </div>
            <div className='overall_page'>
        
            <div className='profile_container'>
                <img src={profile} className="profile_image" />
                <div className="profile_details">
                    <p><span className="detail_label">Faculty Name:</span> {user?.full_name}</p>
                    {/* <p><span className="detail_label">Faculty Name:</span>user.full_name</p> */}
                    <p><span className="detail_label1">Department:</span> {user?.dept}</p>
                    <p><span className="detail_label2">Email:</span> {user?.email}</p>
                    <p><span className="detail_label3">Phone no:</span> {user?.phone_number}</p>
                  
                </div>
             <button className="edit">Edit profile</button>
                
            </div>
            </div>
        </>
    );
}

export default Profile;
