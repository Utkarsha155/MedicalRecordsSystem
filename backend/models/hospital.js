const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/authestapp`);

const hospitalSchema = mongoose.Schema({
  hospitalName: {
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
  address: {
    type: String,
  },
  licenseNumber: {
    type: String,
  },
}, { timestamps: true });


module.exports = mongoose.model("Hospital", hospitalSchema);