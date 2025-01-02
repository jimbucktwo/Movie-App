//Require mongoose
const mongoose = require("mongoose");
//Create schema contains a single field named

//The 'name' field is of type String
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  favorites: Array,
});

module.exports = mongoose.model("User", UserSchema);
