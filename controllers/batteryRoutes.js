const express = require("express");
const Battery = require("../models/batteryModel");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/batterypurchase", (req, res) => {
  res.render("Battery purchase");
});

router.get("/batteryrent", (req, res) => {
  res.render("Battery Rent");
});

router.post("/regbatterybuyer", async (req, res) => {
  console.log("signing a new batterybuyer");
try {
  const batterybuyer = new Battery(req.body);
  await batterybuyer.save();
  console.log(req.body);
  res.redirect("/api/logIn"); // redirect o the employeeform
} catch (error) {
  res.status(400).render("Battery purchase");
  console.log(error);
}
});

module.exports = router;
