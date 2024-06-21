const mongoose = require("mongoose");

// Connect to MongoDB database using provided connection URI
mongoose
  .connect("mongodb+srv://rachelv0626:SD1gM8AT1Q5mj275@pattern-hollow.pndn3wp.mongodb.net/?retryWrites=true&w=majority&appName=Pattern-Hollow", {
    dbName: "Users", // Specify the database name here
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


  const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true // Ensures email is unique
    },
    password: {
      type: String,
      required: true
    }
  });
  
  const User = mongoose.model("Users", userSchema);
  
  module.exports = User;