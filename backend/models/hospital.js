const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const hospitalSchema = mongoose.Schema({
  hospitalName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true, 
    unique: true 
},
  address: {
    type: String,
  },
  licenseNumber: {
    type: String,
    unique: true
  }
});

hospitalSchema.pre('save',async function(next) {
  const hospital = this;
  
  if(!hospital.isModified('password'))return next()

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(hospital.password, salt);
    hospital.password = hash;

    next();

  }catch(err){
    return next(err)
  }
})

hospitalSchema.methods.comparePassword = async function(candidatePassword) {
  try{
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;

  }catch(err){
    throw err;
  }
}

const Hospital = mongoose.model('Hospital', hospitalSchema);
module.exports = Hospital;