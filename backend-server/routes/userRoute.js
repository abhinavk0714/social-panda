const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Get all users
router.get('/', async(req, res) => {
    try {
        const users=await User.find();
        res.json(users)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// Get user by email
router.get('/:email', async(req, res) => {
    const userEmail=req.params.email;
    try {
        const users=await User.findOne({email:userEmail});
        res.json(users)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// Create or update user
router.post('/', async (req, res) => {
    console.log('Request Body:', req.body); // Log the incoming request data
    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            image: req.body.image
        };

        const userRes = await User.findOneAndUpdate(
            { email: data.email }, // Query to match existing user by email
            data, // Update with the new data
            {
                new: true,    // Return the new document
                upsert: true, // Create if it doesn't exist
                runValidators: true // Run schema validations
            }
        );

        console.log('User Created/Updated:', userRes); // Log the result
        res.status(201).json(userRes);
    } catch (error) {
        console.error('Error:', error.message); // Log the error message
        res.status(500).json({ message: error.message });
    }
});

module.exports=router
