const router = require("express").Router();
const Order = require("../models/Order");
const moment = require("moment");
const CreateError = require("http-errors");

router.post("/saveOrder", async (req, res, next) => {
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
router.get("/getTodayOrder", async (req, res) => {
    try {
      const order = await Order.find(
        {
          createdAt:{
            $gte: moment().add(-1,"day"),
          }
        }
      );
      res.status(200).json(order);
      if(order.length == 0)
      {
        console.log("We dont have order from today");
      }
      else{
        console.log("Getting list of all Order" + "\n" + "There is "+ order.length + " order today");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;