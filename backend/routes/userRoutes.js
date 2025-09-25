const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { jwtAuthMiddleware, generateToken } = require("../jwt");


//create user
router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data)
        const response = await newUser.save();
        console.log('data saved')

        const payload = {
            id: response._id,
            email: response.email,
        }
        console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        console.log("Token is : ", token);

        res.status(200).json({
            response: response, token: token,
            user: {
                _id: newUser._id,
                userName: newUser.userName,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const payload = {
            id: user._id,
            email: user.email,
        }
        const token = generateToken(payload);
        res.json({
            token,
            role: "user",
            user: {
                _id: user._id,
                userName: user.userName,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Profile route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try {
        const userData = req.user;
        const userId = userData.email;
        const user = await User.findOne({ email: userId });
        res.status(200).json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//update user
router.put('/update', jwtAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.email;
        const { field, oldValue, newValue } = req.body;

        const user = await User.findOne({ email: userId });
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (field === "password") {
            const isMatch = await user.comparePassword(oldValue);
            if (!isMatch) {
                return res.status(400).json({ error: 'Old value does not match' });
            }
            user.password = newValue;
        } else {
            if (user[field] !== oldValue) {
                return res.status(400).json({ error: 'Old value does not match' });
            }
            user[field] = newValue;
        }
        const updatedUser = await user.save();
        res.status(200).json({ message: 'User updated', data: updatedUser });
    } catch (err) {
        console.error('User Update Error:', err);
        res.status(500).json({ error: "Internal server error" });
    }
});


//delete user
router.delete('/delete', jwtAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.email;
        const deletedUser = await User.findOneAndDelete({ email: userId });
        if (deletedUser) {
            console.log('User deleted successfully');
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;