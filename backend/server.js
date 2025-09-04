// const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser');
// const path = require('path');
// const userModel = require("./models/user");
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const router = express.Router();
// const dotenv =  require("dotenv");

// require("dotenv").config();

// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true
// }))

// const JWT_SECRET = process.env.JWT_SECRET;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.post('/signup', async (req, res) => {
//   try {
//     let { role, username, name, hospitalName, email, password, confirmpassword, phone, address, licenseNumber } = req.body;

//     console.log("Signup request body:", req.body); // 👈 log incoming data

//     const existing = await userModel.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Email already exists" });

//     const hash = await bcrypt.hash(password, 10);

//     let createdUser = await userModel.create({
//       role,
//       username: role === "user" ? username : undefined,
//       name: role === "user" ? name : undefined,
//       hospitalName: role === "hospital" ? hospitalName : undefined,
//       email,
//       password: hash,
//       confirmpassword: hash,
//       phone,
//       address: role === "hospital" ? address : undefined,
//       licenseNumber: role === "hospital" ? licenseNumber : undefined,
//     });

//     let token = jwt.sign({ email }, process.env.JWT_SECRET);
//     res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
//     res.json({ message: "User created successfully", user: createdUser });
//   } catch (error) {
//     console.error("Signup error:", error); // 👈 log actual backend error
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });

// app.post("/login", async function (req, res) {
//     try {
//         let user = await userModel.findOne({ email: req.body.email });
//         if (!user) return res.status(400).json({message: "Your login credentials are not correct!"});

//         bcrypt.compare(req.body.password, user.password, function (err, result) {
//             if (result) {
//                 let token = jwt.sign({ email: user.email }, JWT_SECRET);
//                 res.cookie("token", token, {httpOnly: true, sameSite: "lax"});
//                 res.json({message: "You are logged in"});
//             }
//             else res.status(400).json({message: "Your login credentials are not correct!"});
//         });
//     } catch (error) {
//         res.status(500).json({message: "Server error", error});
//     }
// });

// app.get("/logout", function (req, res) {
//     res.clearCookie("token");
//     res.json({message: "Logged out successfully"});
// })





// app.listen(5000);



const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load env vars
dotenv.config({ path: "./config.env" });
const JWT_SECRET = process.env.JWT_SECRET;

// DB connect
mongoose
  .connect("mongodb://127.0.0.1:27017/authestapp")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB error:", err));

// Models
const User = require("./models/user");
const Hospital = require("./models/hospital");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ---------------- SIGNUP ---------------- */
app.post("/signup", async (req, res) => {
  try {
    const { role, ...data } = req.body;

    let Model = role === "hospital" ? Hospital : User;

    // check email already exists
    const existing = await Model.findOne({ email: data.email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // hash password
    const hash = await bcrypt.hash(data.password, 10);

    const newDoc = await Model.create({
      ...data,
      password: hash,
      confirmpassword: hash, // optional, usually not saved
    });

    const token = jwt.sign({ id: newDoc._id, role }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
    res.json({ message: "Signup successful", user: newDoc });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/* ---------------- LOGIN ---------------- */
app.post("/login", async (req, res) => {
  try {
    const { role, email, password } = req.body;
    let Model = role === "hospital" ? Hospital : User;

    const user = await Model.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/* ---------------- LOGOUT ---------------- */
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
