const router = require("express").Router();
const Order = require("../models/Order");

router.post("/", async (req,res) => {
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

// router.get("/usertest", (req, res) => {
//     res.send("test goos");
// });



module.exports = router;