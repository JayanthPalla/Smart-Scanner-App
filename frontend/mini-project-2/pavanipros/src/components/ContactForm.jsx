import React, { useState } from 'react';
import './contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear the error message when user starts typing
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        // Handle form submission here
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="name_label">Name:</label>
                    <input
                        type="text"
                        id="name_touch"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="email_label">Email:</label>
                    <input
                        type="email"
                        id="email_touch"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="message_label">Message:</label>
                    <textarea
                        id="message_touch"
                        name="message"
                        placeholder="Enter the message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button type="submit" className='send_message'>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
