const { Schema, model } = require('mongoose');

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
        password: {
            type: String,
            required: true
        }
    }
);

const user = model('users', usersSchema);

module.exports = user