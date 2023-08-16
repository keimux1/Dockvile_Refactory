const express = require("express");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/parking", (req,res)=>{
  res.render("parking.pug")
});


module.exports = router 