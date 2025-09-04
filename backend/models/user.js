const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/authestapp`);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: false },
  phone: { type: String, required: true, unique: true },
}, { timestamps: true });


module.exports = mongoose.model("User", userSchema);