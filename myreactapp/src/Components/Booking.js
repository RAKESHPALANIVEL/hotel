import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';

function Booking() {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const fetchListings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Bookings'); // Ensure this URL matches your API
            setListings(response.data);
        } catch (error) {
            setError('Failed to load data');
        }
    };

    useEffect(() => {
        fetchListings();
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleCategoryClick = (category) => {
        console.log(`Category selected: ${category}`);
        setIsDropdownOpen(false);

        if (category === 'Family') {
            navigate('/family'); // Navigate to Family page
        } else if (category === 'Apartment') {
            navigate('/apartment'); // Navigate to Apartment page
        } else if (category === 'Sublet') {
            navigate('/sublet'); // Navigate to Sublet page
        } else if (category === 'Bachelor Mess') {
            navigate('/bachelor'); // Navigate to Bachelor Mess page
        } else if (category === 'Office') {
            navigate('/office'); // Navigate to Office page
        }
    };

    if (error) return <div>{error}</div>;

    return (
        <div className="booking-page">
            <div className="filter-bar">
                <button className="filter-btn active">Popular</button>
                <button className="filter-btn active">Date Newest To Oldest</button>
                <button className="filter-btn active">Date Older To Newest</button>
                <button className="filter-btn active">Price Low To High</button>
                <button className="filter-btn active">Price High To Low</button>
                <button className="filter-btn active" onClick={toggleDropdown}>Category</button>
            </div>

            <div className="listings-container">
                {listings.map((listing) => (
                    <div key={listing._id} className="listing-card">
                        <img src={listing.image} alt={listing.name} className="listing-image" />
                        <div className="listing-details">
                            <h3>{listing.name}</h3>
                            <p className="location">{listing.location}</p>
                            <div className="features">
                                <span>{listing.bedrooms} Bedrooms</span> | <span>{listing.bathrooms} Bathrooms</span>
                            </div>
                            <p className="price">{listing.price}</p>
                            <div className="actions">
                                <button className="book-now-btn">Book Now</button>
                                <div className="icons">
                                    <i className="fa fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dropdown Popup */}
            {isDropdownOpen && (
                <div className="dropdown-overlay">
                    <ul className="dropdown-menu">
                        <li onClick={() => handleCategoryClick('Family')}>Family</li>
                        <li onClick={() => handleCategoryClick('Apartment')}>Apartment</li>
                        <li onClick={() => handleCategoryClick('Sublet')}>Sublet</li>
                        <li onClick={() => handleCategoryClick('Bachelor Mess')}>Bachelor Mess</li>
                        <li onClick={() => handleCategoryClick('Office')}>Office</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Booking;
