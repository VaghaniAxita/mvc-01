const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vaghaniaxita23:node@cluster0.jkron.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('connect to database');
}

module.exports = connectDB;