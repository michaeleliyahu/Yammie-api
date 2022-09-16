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
// //GET ALL

router.get("/", async (req, res) => {
    try {
      const order = await Order.find();
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;