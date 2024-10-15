import React, { useState } from 'react';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email || !validateEmail(email)) newErrors.email = 'A valid email is required';
        if (phone && phone.length < 10) newErrors.phone = 'Phone number must be at least 10 digits';
        if (!message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            // Simulate form submission (replace with real API call)
            setTimeout(() => {
                console.log('Form submitted:', { name, email, phone, message });
                setIsSubmitting(false);
                setSuccess(true);
                // Reset form
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            }, 2000);
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                If you have any questions or inquiries, feel free to fill out the form below and we’ll get back to you shortly.
            </p>

            {success && <div className="success-message">Your message has been sent successfully!</div>}
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <div className="error">{errors.name}</div>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <div className="error">{errors.email}</div>}

                <label htmlFor="phone">Phone (optional)</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className={errors.phone ? 'input-error' : ''}
                />
                {errors.phone && <div className="error">{errors.phone}</div>}

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here"
                    className={errors.message ? 'input-error' : ''}
                />
                {errors.message && <div className="error">{errors.message}</div>}

                <button type="submit" className="contact-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}

export default ContactPage;
