const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const orderRoute = require("./routes/order");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DataBase connection successful"))
.catch((err) => {
    console.log(err);
});

app.use("/api/order", orderRoute);


app.listen(5000, ()=>{
    console.log("Backend server running");
})