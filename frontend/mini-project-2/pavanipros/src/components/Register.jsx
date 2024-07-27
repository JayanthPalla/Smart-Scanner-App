import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import login_image from '../assets/login_image.png';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        setErrors({ ...errors, [name]: '' });
    };

    const navigatereg = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        try {
            const response = await axios.post('/user/register/', formData);
            if (response.status === 201) {
                console.log("User created");
                navigatereg("/login");
            }
           else{
            console.log("user not created try again");

           }

            

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className='main-body'>
            <div className='main-div'>
                <div className='left-div'>
                    <p className='register_welcome'>Smart Scanner<br /> allows you to <br /> scan smartly</p>
                    <img src={login_image} alt="login_image" className='login-image' />
                </div>
                <div className='right-div'>
                    <p className='create_account'>Create Account</p>
                    <div className="registration-form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullName" className='name_registration_label'>Full Name</label>
                                <input
                                    type="text"
                                    className="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.fullName && <p className="error">{errors.fullName}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className='email_registration_label'>Email</label>
                                <input
                                    type="email"
                                    className="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className='password_registration_label'>Password</label>
                                <input
                                    type="password"
                                    className="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword" className='okpassword_registration_label'>Confirm Password</label>
                                <input
                                    type="password"
                                    className="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                            </div>
                            <button type="submit" className="Registration_button">Register</button>
                            <p>Already Have an Account?<a href="/login" className='Login_link'>Login</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
