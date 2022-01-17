// index.js is the entry point of our server

// Setting up our express server 
const express = require('express');

// Importing and setting up our MongoDB database
const mongoose = require('mongoose')

// Initialising our express server
const app = express();

// Code to allow us to receive information from the frontend in JSON format, necessary to get all of our information correctly
app.use(express.json())

mongoose.connect("mongodb+srv://newUser-1:vaangevaange1@iventory-crud.aek0k.mongodb.net/inventoryTracking?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

// Starting the server
app.listen(3001, () => {
    console.log('Server running on port 3001...')
});