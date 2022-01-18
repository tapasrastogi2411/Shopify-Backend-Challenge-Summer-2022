// index.js is the entry point of our server

const express = require('express'); // Setting up our express server 
const mongoose = require('mongoose') // Importing and setting up our MongoDB database
const cors = require('cors') // To interact with the APIs that we make
const app = express(); // Initialising our express server

const itemModel = require("./schemas/itemSchema") // Importing the schema into this file

// Code to allow us to receive information from the frontend in JSON format, necessary to get all of our information correctly
app.use(express.json())
app.use(cors())

// Adding the connection to our MongoDB database
mongoose.connect("mongodb+srv://newUser-1:vaangevaange1@iventory-crud.aek0k.mongodb.net/inventoryTracking?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

// Creating a route - Whenever someone comes across this route, I want to enter/create an item in the database
app.post('/insert', async (req, res) => {

    const itemName = req.body.itemName
    const brandName = req.body.brandName
    const itemDescription = req.body.itemDescription
    const quantity = req.body.quantity
    const price = req.body.price

    const item = new itemModel({ Name: itemName, Brand: brandName, Description: itemDescription, Quantity: quantity, Price: price });

    try {

        await item.save(); // Telling the database to save this information in the server
        res.send("Inserted data entry!")
    } catch (err) {
        console.log(err)
    }

})

// Creating the `read` route of the CRUD functionality - This allows a user to see what items are currently present in the inventory/database

app.get('/read', async (req, res) => {

    itemModel.find({}, (err, result) => {

        if (err) {
            res.send(err)
        }

        res.send(result)
    })
});


// Creating the `delete` route of the CRUD functionality - This allows a user to delete an item already in the database

app.delete('/delete/:id', async (req, res) => {

    const id = req.params.id
    await itemModel.findByIdAndRemove(id).exec();
    res.send("Item deleted!")

})

// Starting the server
app.listen(process.env.PORT ?? 3001, () => {
    console.log('Server running on port 3001...')
});