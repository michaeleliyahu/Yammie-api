const router = require("express").Router();

router.get("/ordertest", (req,res) => {
    res.send("order test successful");
});

module.exports = router;