const passport = require('passport');
const User = require('./models/user.js');
const LocalStrategy = require('passport-local').Strategy; 

passport.use(new LocalStrategy(async(EMAIL,password,done)=>{ 
    try{
        const user = await User.findOne({email: EMAIL});
        if(!user){
            return done(null, false, {message: 'Incorrect email.'});
        }
        const isPassword = await user.comparePassword(password);
        if(!isPassword){
            return done(null, false, {message: 'Incorrect password.'});
        }else{
            return done(null, user);
        }

    }catch(err){
        return done(err);
    }
}))

module.exports = passport;