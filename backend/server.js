const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db");
const passport = require("./auth");
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(passport.initialize());

app.use('/user', userRoutes);
app.use('/hospital', hospitalRoutes);

app.listen(PORT, ()=> {
  console.log('Server is running on port', PORT);
} )