const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        username: {type: String, required:true},
        address: {type: String, required:true},
        phonenumber: {type: String, required:true},
        product: {type: Array, required:true},
        note: {type: Array, required:false}

    }
);

module.exports = mongoose.model("Order". orderSchema);