const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect("mongodb://127.0.0.1:27017/crudDB");
    console.log("Connection established");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
