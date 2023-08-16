const express = require("express");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/tirepurchase", (req, res) => {
  res.render("Tire purchase");
});

router.get("/tirepressure", (req, res) => {
  res.render("Tire Pressure");
});

router.get("/puncturefixing", (req, res) => {
  res.render("Puncture Fixing");
});

router.get("/tirevalves", (req, res) => {
  res.render("valves");
});

module.exports = router;
