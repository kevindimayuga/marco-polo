const { Schema, model } = require('mongoose');

const lostItemsSchema = new Schema(
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
            required: true
        },
        founditems: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Found'
            }
        ]
    }
);

const lostItems = model('LostItems', lostItemsSchema)

module.exports = lostItems