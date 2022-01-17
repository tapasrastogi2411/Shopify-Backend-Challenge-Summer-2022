const mongoose = require('mongoose')

// Here we are defining our schema for the inventory tracking system, where we define the attributes each item in our database will have
const itemSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true,
    },

    Brand: {
        type: String,
        required: true
    },

    Description: {
        type: String,
        required: true
    },

    Quantity: {
        type: Number,
        required: true
    },

    Price: {
        type: Number,
        required: true
    },

});

const items = mongoose.model("inventoryData", itemSchema)
module.exports = items