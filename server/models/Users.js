const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: Number,
  username: String,
  password: String,
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
