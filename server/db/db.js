const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://kage1903:r92jCkkgvMhy4cvW@glitzcluster.dqxirdf.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB CONENCTED");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
