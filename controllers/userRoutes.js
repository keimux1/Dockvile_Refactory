const express = require("express");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/signUp", (req,res)=>{
  res.render("signup")
});

router.get("/logIn", (req,res)=>{
    res.render("Dockvile_logIn")
  });
  
module.exports = router 

