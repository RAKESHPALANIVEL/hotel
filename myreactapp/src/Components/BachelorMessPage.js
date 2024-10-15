import React, { useEffect, useState } from 'react';

function BachelorMessPage() {
    const [bachelorMessListings, setBachelorMessListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/bachelor') // Ensure this matches your backend URL
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setBachelorMessListings(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching bachelor mess listings:', error);
                setError('Failed to load data.');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="bachelor-mess-page">
            <h1 className="bachelor-mess-heading">Bachelor Mess Listings</h1>
            <div className="listings-container">
                {bachelorMessListings.map((listing) => (
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

export default BachelorMessPage;
