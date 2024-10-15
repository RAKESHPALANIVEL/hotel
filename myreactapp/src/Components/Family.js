import React, { useEffect, useState } from 'react';

function FamilyPage() {
    const [familyListings, setFamilyListings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/family')
            .then(response => response.json())
            .then(data => setFamilyListings(data))
            .catch(error => console.error('Error fetching family listings:', error));
    }, []);

    return (
        <div className="family-page">
            <h1 className="family-heading">Family Apartments</h1>
            <div className="listings-container">
                {familyListings.map((listing) => (
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
        </div>
    );
}

export default FamilyPage;
