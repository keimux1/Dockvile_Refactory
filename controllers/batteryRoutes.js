const express = require("express");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/batterypurchase", (req,res)=>{
  res.render("Battery purchase")
});

router.get("/batteryrent", (req,res)=>{
    res.render("Battery Rent")
  });
  
module.exports = router 

