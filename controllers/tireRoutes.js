const express = require("express");
const Tire = require("../models/tirePurchaseModel");
const TirePressure = require("../models/tirePressureModel");
const TirePuncture = require("../models/punctureFixingModel");
const TireValves = require("../models/tirevalvesModel");

const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/tirepurchase", (req, res) => {
  res.render("Tire purchase");
});

router.post("/regtirebuyer", async (req, res) => {
  console.log("signing a new tirebuyer");
try {
  const tirebuyer = new Tire(req.body);
  await tirebuyer.save();
  console.log(req.body);
  res.redirect("/api/logIn"); // redirect o the employeeform
} catch (error) {
  res.status(400).render("Tire purchase");
  console.log(error);
}
});

router.get("/tirepressure", (req, res) => {
  res.render("Tire Pressure");
});

router.post("/regtirepressure", async (req, res) => {
  console.log("signing a new tirepressure");
try {
  const tirepressure = new TirePressure(req.body);
  await tirepressure.save();
  console.log(req.body);
  res.redirect("/api/logIn"); // redirect o the employeeform
} catch (error) {
  res.status(400).render("Tire Pressure");
  console.log(error);
}
});

router.get("/puncturefixing", (req, res) => {
  res.render("Puncture Fixing");
});

router.post("/regpunctureFixing", async (req, res) => {
  console.log("signing a new Puncture Fixing");
try {
  const puncture = new TirePuncture(req.body);
  await puncture.save();
  console.log(req.body);
  res.redirect("/api/logIn"); // redirect o the employeeform
} catch (error) {
  res.status(400).render("Puncture Fixing");
  console.log(error);
}
});

router.get("/tirevalves", (req, res) => {
  res.render("valves");
});

router.post("/regtirevalves", async (req, res) => {
  console.log("signing a new tirepressure");
try {
  const vulve = new TireValves(req.body);
  await vulve.save();
  console.log(req.body);
  res.redirect("/api/logIn"); // redirect o the employeeform
} catch (error) {
  res.status(400).render("Puncture Fixing");
  console.log(error);
}
});

module.exports = router;
