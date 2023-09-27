const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: String,
  firstName: String,
  lastName: String,
  signUpTimeAndDate: { type: String, required: true },
  friends:[{type: String}]

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
