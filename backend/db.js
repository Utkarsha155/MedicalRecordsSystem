const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl = process.env.MONGO_URI;

mongoose.connect(mongoUrl)
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {  
    console.log('Disconnected from MongoDB');
});

module.exports = db;