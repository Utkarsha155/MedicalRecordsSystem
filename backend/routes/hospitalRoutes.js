const express = require("express");
const router = express.Router();
const Hospital = require("../models/hospital");
const { jwtAuthMiddleware, generateToken } = require("../jwt");

//create user
router.post('/signup', async (req, res)=> {
    try{
        const data = req.body;
        const newUser = new Hospital(data)
        const response = await newUser.save();
        console.log('data saved')

        const payload = {
            email: response.email,
            password: response.password
        }
        console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        console.log("Token is : ", token);

        res.status(200).json({response: response, token: token});

    } catch(err){
        console.error(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

//login user
router.post('/login', async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await Hospital.findOne({email: email});
        if( !user || !(await user.comparePassword(password))){
            return res.status(401).json({error: 'Invalid username or password'});
        }
        const payload = {
            email: user.email,
            password: user.password
        }
        const token = generateToken(payload);
        res.json({token})
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Profile route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try{
        const userData = req.user;
        const userId = userData.email;
        const user = await Hospital.findOne({email: userId});

        res.status(200).json({user});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//update user
router.put('/update', jwtAuthMiddleware, async (req, res) => {
    try {
        const hospitalEmail = req.user.email; 
        const updates = req.body;
        const hospital = await Hospital.findOne({ email: hospitalEmail });
        if (!hospital) {
            return res.status(404).json({ error: 'Hospital record not found' });
        }
        
        for (const key in updates) {
            if (Object.prototype.hasOwnProperty.call(updates, key)) {
                hospital[key] = updates[key];
            }
        }
        
        const updatedHospital = await hospital.save();

        console.log('Data updated for Hospital:', updatedHospital.hospitalName);
        res.status(200).json({ 
            message: 'Hospital data updated successfully', 
            data: updatedHospital 
        });

    } catch (err) {
        console.error('Hospital Update Error:', err);
        res.status(500).json({ error: "Internal server error" });
    }
});

//delete user
router.delete('/delete', jwtAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.email;
        const deletedUser = await Hospital.findOneAndDelete({email: userId});
        if (deletedUser) {
            console.log('Hospital deleted successfully');       
            res.status(200).json({ message: 'Hospital deleted successfully' });
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (err) { 
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }   
});

module.exports = router;