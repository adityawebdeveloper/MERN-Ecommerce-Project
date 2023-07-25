const mongoose = require("mongoose");

const connectDatabase = ( )=>{
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true})
  .then((data) => {
    console.log(`Connected to MongoDB with server: ${data.connection.host}`);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
}

module.exports = connectDatabase
  