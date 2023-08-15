const mongoose = require("mongoose"); // Mongoose library for MongoDB
const dotenv = require("dotenv"); // Load environment variables from a .env file
const { MONGO_URL } = require("./keys"); // Import MongoDB URL from keys.js
dotenv.config(); // Load environment variables

// Define an asynchronous function to establish the database connection
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the provided URL
    const conn = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
     // If the connection is successful, log a success message
    console.log(`MongoDB is Connected`);
  } catch (error) {
    // If an error occurs during connection, log the error message
    console.log(`Error: ${error.message}`);
  }
};

// Export the connectDB function to be used in other parts of the application
module.exports = connectDB;
