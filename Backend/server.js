const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/rentalService', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Import models
const Apartment = require('./models/apartmentModel');
const Bachelor = require('./models/bachelorModel');
const Booking = require('./models/bookingModel');
const Family = require('./models/familyModel');
const Office = require('./models/office'); // Ensure correct file name
const User = require('./models/userModel');
const Sublet = require('./models/subletModel');
const Product = require('./models/productModel');

// JWT Secret - define your secret key here
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your actual secret key

// API endpoints

// Get all apartments
app.get('/api/apartments', async (req, res) => {
    try {
        const apartments = await Apartment.find();
        res.json(apartments);
    } catch (error) {
        console.error('Error fetching apartments:', error);
        res.status(500).send('Server Error');
    }
});

// Add a new apartment
app.post('/api/apartments', async (req, res) => {
    const { name, location, price, image } = req.body;
    try {
        const newApartment = new Apartment({ name, location, price, image });
        await newApartment.save();
        res.status(201).json(newApartment);
    } catch (error) {
        console.error('Error adding apartment:', error);
        res.status(500).send('Server Error');
    }
});

// Get all bachelor mess listings
app.get('/api/bachelor', async (req, res) => {
    try {
        const bachelorListings = await Bachelor.find();
        res.json(bachelorListings);
    } catch (error) {
        console.error('Error fetching bachelor listings:', error);
        res.status(500).send('Server Error');
    }
});

// Add bachelor mess listings
app.post('/api/bachelor', async (req, res) => {
    const { name, location, price, bedrooms, bathrooms, image } = req.body;
    try {
        const newBachelor = new Bachelor({ name, location, price, bedrooms, bathrooms, image });
        await newBachelor.save();
        res.status(201).json(newBachelor);
    } catch (error) {
        console.error('Error adding bachelor listing:', error);
        res.status(500).send('Server Error');
    }
});

// Get all bookings
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).send('Server Error');
    }
});

// Create a new booking
app.post('/api/bookings', async (req, res) => {
    const { userId, listingId, date } = req.body;
    try {
        const newBooking = new Booking({ userId, listingId, date });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).send('Server Error');
    }
});

// Get all family apartments
app.get('/api/family', async (req, res) => {
    try {
        const familyListings = await Family.find();
        res.json(familyListings);
    } catch (error) {
        console.error('Error fetching family listings:', error);
        res.status(500).send('Server Error');
    }
});

// Get all sublet listings
app.get('/api/sublets', async (req, res) => {
    try {
        const sublets = await Sublet.find();
        res.json(sublets);
    } catch (error) {
        console.error('Error fetching sublets:', error);
        res.status(500).send('Server Error');
    }
});

// Get all office details
app.get('/api/offices', async (req, res) => {
    try {
        const offices = await Office.find();
        res.json(offices);
    } catch (error) {
        console.error('Error fetching offices:', error);
        res.status(500).json({ error: 'Failed to fetch offices' });
    }
});

// Signup route
app.post('/api/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Failed to register user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Failed to login:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
});

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Add a new product
app.post('/api/products', async (req, res) => {
    const { name, location, price, image, features } = req.body;
    try {
        const newProduct = new Product({ name, location, price, image, features });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Failed to add product' });
    }
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
