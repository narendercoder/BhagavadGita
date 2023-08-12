const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { MONGO_URL } = require("./keys");
dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB is Connected`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = connectDB;
