// index.js is the entry point of our server

require('dotenv').config(); // To use environment variables here to safely store information

const express = require('express'); // Setting up our express server 
const mongoose = require('mongoose') // Importing and setting up our MongoDB database
const cors = require('cors') // To interact with the APIs that we make
const app = express(); // Initialising our express server

const itemModel = require("./schemas/itemSchema") // Importing the schema into this file

// Code to allow us to receive information from the frontend in JSON format, necessary to get all of our information correctly
app.use(express.json())
app.use(cors())

// Adding the connection to our MongoDB database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
});

mongoose.connection.once("open", () => console.log("works"));

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

// Creating the `update`route of the CRUD functionality - This allows a user to delete an item already in the database
app.put("/update/:id", async (req, res) => {

    await itemModel.findById(req.params.id).then((newInventory) => {

        for (const element in req.body) {
            newInventory[element] = req.body[element];
        }
        newInventory
            .save()
            .then(() => res.status(200).json(newInventory))
            .catch((err) => res.status(400).json(err));
    })

})

// A helper function which converts json into CSV values
const createCSV = (inventory) => {
    const columnHeaders = ["_id", "Name", "Brand", "Description", "Quantity", "Price"];

    let csv = columnHeaders.join(",");

    inventory.forEach((item) => {
        csv += `\n` + columnHeaders.map((key) => item[key]).join(",");
    });

    return csv;
};

// Creating a route which exports the given data into a CSV file
app.get("/inventory/export", async (req, res) => {

    itemModel.find().then((inventory) => {

        res.setHeader("'Content-Type'", "'text/csv'");
        res.attachment(`export-${new Date().toISOString()}.csv`);
        res.send(createCSV(inventory));
    })
        .catch((err) => res.status(400).json(err));
})

// Starting the server
app.listen(process.env.PORT ?? 3001, () => {
    console.log('Server running on port 3001...')
});