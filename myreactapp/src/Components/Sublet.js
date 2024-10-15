import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SubletPage() {
    const [subletListings, setSubletListings] = useState([]);

    useEffect(() => {
        // Fetch sublet data from API
        axios.get('http://localhost:5000/api/sublets')
            .then(response => {
                setSubletListings(response.data);
            })
            .catch(error => {
                console.error('Error fetching sublets:', error);
            });
    }, []);

    return (
        <div className="sublet-page">
            <h1 className="sublet-heading">Sublet Listings</h1>
            <div className="listings-container">
                {subletListings.map((listing) => (
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

export default SubletPage;
