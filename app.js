const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const orderRoute = require("./routes/order");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DataBase connection successful"))
.catch((err) => {
    if(process.env.MONGO_URL === "<URL>")
    {
        console.log("missing URL: go to .env file and put your mongoDB URL and save");
    }
    else{
        console.log(err);
    }
});

app.use(morgan('dev'));

app.use(express.json());
app.use("/api/order", orderRoute);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server running");
})

module.exports = app
