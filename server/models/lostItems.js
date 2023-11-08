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

const Items = model('Items', lostItemsSchema)

module.exports = Items