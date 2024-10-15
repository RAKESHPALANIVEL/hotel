import React, { useState, useEffect } from 'react';

function Listings() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    console.error('Failed to fetch products');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="listings-page">
            <h1 className="listings-title">Available Rentals</h1>
            <div className="listings-container">
                {products.map((product) => (
                    <div key={product._id} className="listing-item">
                        <img src={product.image} alt={product.name} className="listing-image" />
                        <div className="listing-info">
                            <h2>{product.name}</h2>
                            <p className="price">{product.price}</p>
                            <p className="features">{product.features}</p>
                        </div>
                        <div className="actions">
                            <button className="book-now-btn">Book Now</button>
                            <div className="icons">
                                <i className="fa fa-heart"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Listings;
