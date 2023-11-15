const { Schema, model } = require('mongoose');
const itemSchema = require('./foundItems');

const usersSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String, 
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
          },
        password: {
            type: String,
            required: true
        },
        foundItems: [{
            type: Schema.Types.ObjectId,
            ref: 'FoundItems'
        }]
    }
);

const user = model('users', usersSchema);

module.exports = user