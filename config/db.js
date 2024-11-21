const mongoose = require('mongoose');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    await mongoose.connect( DATABASE_URL );
    console.log('Database Connected');
  } catch (err) {
    console.error('Database Connection Error:', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
