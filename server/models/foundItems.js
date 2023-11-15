const { Schema, model } = require('mongoose');

const foundItemsSchema = new Schema(
    {
        name: {
            type: String, 
            required: true,
        },
        category: {
            type: String,
            required: true
        },
        location: {
            type: String,
            location: String,
            required: true
        },
        // datefound: [ {
        //    type: Date,
        //    default: Date.now
        // }
        // ]
    }
);

const foundItems = model('FoundItems', foundItemsSchema);

module.exports = foundItems