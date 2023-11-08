const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017=marco-polo');

// Export connection
module.exports = mongoose.connection;