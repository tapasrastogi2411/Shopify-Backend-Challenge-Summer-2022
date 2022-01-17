// index.js is the entry point of our server

const express = require('express'); // Setting up our express server 
const mongoose = require('mongoose') // Importing and setting up our MongoDB database
const app = express(); // Initialising our express server

const itemModel = require("./schemas/itemSchema") // Importing the schema into this file

// Code to allow us to receive information from the frontend in JSON format, necessary to get all of our information correctly
app.use(express.json())

// Adding the connection to our MongoDB database
mongoose.connect("mongodb+srv://newUser-1:vaangevaange1@iventory-crud.aek0k.mongodb.net/inventoryTracking?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

// Creating a route - Whenever someone comes across this route, I want to enter/create an item in the database
app.get('/', async (req, res) => {

    const item = new itemModel({Name: "T-shirt", Brand: "Adidas", Description: "Unisex S - Red T-shirt", Quantity: 2, Price: 250});

    try {

        await item.save(); // Telling the database to save this information in the server
        res.send("Inserted data entry!")
    } catch(err){
        console.log(err)
    }

})

// Starting the server
app.listen(3001, () => {
    console.log('Server running on port 3001...')
});