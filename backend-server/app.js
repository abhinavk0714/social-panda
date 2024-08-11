const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8000; // Define your desired port

// Middleware to parse JSON requests and enable CORS
app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URL; // Replace with your MongoDB URI and database name

// Connecting to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => console.log("Connected to MongoDB"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Example route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express app!');
});

// User route
const userRoute = require('./routes/userRoute');
app.use('/user', userRoute);

// Post route
const postRoute = require('./routes/postRoute');
app.use('/post', postRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
