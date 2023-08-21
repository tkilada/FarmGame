require('dotenv').config();
const express = require("express");
const app = express();

// Middleware Routing
const saveRoute = require("./Controllers/SaveGameController");

const userRoute = require('./Controllers/user.controller');

const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASEURL)
const db = mongoose.connection

db.once("open",()=> {
    console.log("connected to database")
})

app.use(cors())
app.use(express.json())

app.use("/Save",saveRoute);
app.use("/User",userRoute)

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT}`);
});

