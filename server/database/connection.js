const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/DokoPractise");
    console.log('Database connected sucessfully');
  } catch {
    console.error('Database cannot be connected')
  }
};

module.exports = connectDatabase;