import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';
import total_image from '../assets/totalmsg.png';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false // Added rememberMe field
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData({ ...formData, [name]: fieldValue });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            // Assuming '/user/login/' is the correct endpoint
            const response = await axios.post('/user/login/', formData);

            if(response.status === 200){
                navigate("/home");

            }
            // else if(response.status==401){
            //     console.log("Invalid credentials");

            // }
           
        }catch (error) {
            
            // Handle error response here
            if(error.response && error.response.status === 401){
                console.log("Invalid Credentials");
            }else{
                console.error('Error submitting form:', error);
            }
        }
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };

    return (
        <div className='login-body'>
            <div className='login-div'>
                <div className='login-left-div'>
                    <p className='login_welcome'>WELCOME<br /> Don't Have an Account?<br /></p>
                    <img src={total_image} alt="login_image" className='total-image' />
                    <button className='register_button' onClick={handleRegisterClick}>Register Now</button>
                </div>
                <div className='login-right-div'>
                    <p className='faculty_login'>FACULTY LOGIN</p>
                    <form className="login_form" onSubmit={handleSubmit}>
                        <div className="input-elements">
                            <label htmlFor="email" className="login_email">Email</label>
                            <input
                                type="email"
                                placeholder="youremail@gmail.com"
                                id="email_login"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                            <br /><br />
                            <label htmlFor="password" className="login_password">Password</label>
                            <input
                                type="password"
                                placeholder="******"
                                id="password_login"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                            <br /><br />
                            <label htmlFor="rememberMe" id="rememberMe_login">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                /> Remember Me
                            </label>
                            <br /><br />
                        </div>
                        <button className="login_button" type="submit">Login</button>
                        <div className="remember-forgot">
                            <a href="#" className="forgot-password-link-login">Forgot Password</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
