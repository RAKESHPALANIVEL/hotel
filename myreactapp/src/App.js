import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Listings from './Components/Productlist';
import Booking from './Components/Booking';
import FamilyPage from './Components/Family';
import ApartmentPage from './Components/Apartment';
import SubletPage from './Components/Sublet';
import BachelorMessPage from './Components/BachelorMessPage';
import OfficePage from './Components/Office';
import Contact from './Components/Contact';
import About from './Components/About';
import LoginForm from './Components/Login';
import AdminPage from './Components/Admin';
import SignupForm from './Components/SignupForm'; // Corrected import

import './App.css';

function App() {
  // State to determine if the user is an admin
  const [isAdmin, setIsAdmin] = useState(true); // Change to true if the user is an admin

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          {isAdmin && <Link to="/admin">Admin</Link>} {/* Conditionally render the Admin link */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Listings />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/apartment" element={<ApartmentPage />} />
          <Route path="/sublet" element={<SubletPage />} />
          <Route path="/bachelor" element={<BachelorMessPage />} />
          <Route path="/office" element={<OfficePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
