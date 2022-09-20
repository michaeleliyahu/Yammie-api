const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    username: {type: String, required:true},
    address: {type: String, required:true},
    phoneNumber: {type: String, required:true},
    product:{type: Array, required:true},
    note:{type: String, required:false}
    },
);
orderSchema.set('timestamps', true);

module.exports = mongoose.model("Order", orderSchema);