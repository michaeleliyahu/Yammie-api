const router = require("express").Router();
const Order = require("../models/Order");
const CreateError = require("http-errors");

router.post("/", async (req, res, next) => {
    try{
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        console.log(err.message);
        if(err.name === 'validationError')
        {
          next(CreateError(422, err.message))
          return
        }
        next(err)
    }
});

// //GET ALL
router.get("/", async (req, res) => {
    try {
      const order = await Order.find();
      res.status(200).json(order);
      console.log("Getting list of all Order");
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;