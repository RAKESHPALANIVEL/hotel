const mongoose = require('mongoose');
const User = require('./userModel'); // Path to the user model

const seedAdmin = async () => {
    try {
        // Create a new admin user with a predefined email and password
        const admin = new User({
            email: 'admin@example.com',
            password: 'adminpassword', // Ensure you set a strong password for production
            role: 'admin'
        });

        await admin.save();
        console.log('Admin user created.');
    } catch (error) {
        console.error('Error seeding admin user:', error);
    } finally {
        mongoose.connection.close(); // Close the connection after seeding
    }
};

mongoose.connect('mongodb://localhost:27017/rentalService', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        seedAdmin();
    })
    .catch(err => console.error('MongoDB connection error:', err));
