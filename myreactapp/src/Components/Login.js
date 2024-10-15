// src/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', email, password);
        // Example redirect on successful login
        navigate('/home'); // Redirect to home page or admin page based on user role
    };

    const handleSignupClick = () => {
        navigate('/signup'); // Redirect to signup page
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login to Your Account</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="signup-container">
                <p>Don't have an account?</p>
                <button className="signup-button" onClick={handleSignupClick}>Sign Up</button>
            </div>
        </div>
    );
}

export default LoginForm;
