const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DataBase connection successful"))
.catch((err) => {
    console.log(err);
});

app.get("/api/test", () => {
    console.log("test successful");
});

app.listen(5000, ()=>{
    console.log("Backend server running");
})