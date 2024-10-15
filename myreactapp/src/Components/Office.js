import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OfficePage() {
    const [officeListings, setOfficeListings] = useState([]);
    const [error, setError] = useState(null);

    // Fetch office listings from the backend
    const fetchOfficeListings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/offices'); // Ensure this URL matches your API
            setOfficeListings(response.data);
        } catch (error) {
            setError('Failed to load office listings');
        }
    };

    useEffect(() => {
        fetchOfficeListings();
    }, []);

    if (error) return <div>{error}</div>;

    return (
        <div className="office-page">
            <h1 className="office-heading">Office Listings</h1>
            <div className="listings-container">
                {officeListings.map((listing) => (
                    <div key={listing._id} className="listing-card">
                        <img src={listing.image} alt={listing.name} className="listing-image" />
                        <div className="listing-details">
                            <h3>{listing.name}</h3>
                            <p className="location">{listing.location}</p>
                            <div className="features">
                                <span>{listing.area}</span>
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
        </div>
    );
}

export default OfficePage;
