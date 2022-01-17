// index.js is the entry point of our server

// Setting up our express server 
const express = require('express')

// Initialising our express server
const app = express

app.listen(3001, () => {
    console.log('Server running on port 3001...')
});