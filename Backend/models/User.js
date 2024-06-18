const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  // age: { type: Number, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);

