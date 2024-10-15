import React, { useState } from 'react';
import './Admin.css'
function AdminPage() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [features, setFeatures] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apartmentData = { name, location, price, image, features };

        try {
            const response = await fetch('http://localhost:5000/api/products', { // Ensure this endpoint matches your backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apartmentData),
            });

            if (response.ok) {
                alert('Apartment added successfully!');
                setName('');
                setLocation('');
                setPrice('');
                setImage('');
                setFeatures('');
            } else {
                alert('Error adding apartment!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding apartment!');
        }
    };

    return (
        <div className="admin-page">
            <h2>Add New Apartment</h2>
            <form onSubmit={handleSubmit} className="admin-form">
                <label>Apartment Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label>Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <label>Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    min="0" // Ensures price is a non-negative number
                />
                <label>Image URL</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                <label>Features</label>
                <input
                    type="text"
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    required
                />
                <button type="submit">Add Apartment</button>
            </form>
        </div>
    );
}

export default AdminPage;
