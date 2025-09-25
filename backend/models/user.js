const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
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
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    unique: true,
  },
});

userSchema.pre('save',async function(next) {
  const user = this;
  if(!user.isModified('password'))return next()

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    
    user.password = hash;

    next();

  }catch(err){
    return next(err)
  }
})

userSchema.methods.comparePassword = async function(candidatePassword) {
  try{
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;

  }catch(err){
    throw err;
  }
}

const User = mongoose.model("User", userSchema);
module.exports = User;
