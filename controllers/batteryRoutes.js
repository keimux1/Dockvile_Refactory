const express = require("express");
const Battery = require("../models/batteryModel");
const Batteryrent = require("../models/batteryRentModel");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/batterypurchase", (req, res) => {
  res.render("Battery purchase");
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

router.get("/batteryrent", (req, res) => {
  res.render("Battery Rent");
});

router.post("/regbatteryrenter", async (req, res) => {
  console.log("signing a new batteryrenter");
try {
  const batteryrenter = new Batteryrent(req.body);
  await batteryrenter.save();
  console.log(req.body);
  res.redirect("/api/logIn"); // redirect o the employeeform
} catch (error) {
  res.status(400).render("Battery Rent");
  console.log("we have caught an error");
  console.log(error);
}
});

module.exports = router;
