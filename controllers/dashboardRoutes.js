const express = require("express");
const Employee = require("../models/employeeModel");
const Parking = require("../models/parkingModel");
const Battery = require("../models/batteryModel");
const Batteryrent = require("../models/batteryRentModel");
const Tire = require("../models/tirePurchaseModel");
const TirePressure = require("../models/tirePressureModel");
const TirePuncture = require("../models/punctureFixingModel");
const TireValve = require("../models/tirevalvesModel");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");


router.get("/editparking", (req, res) => {
  res.render("editparking");
});

router.get("/dashboard", async (req, res) => {
  try {
    let item1 = await Employee.find();
    let item2 = await Parking.find();
    let item3 = await Battery.find();
    let item4 = await Batteryrent.find();
    let item5 = await Tire.find();
    let item6 = await TirePressure.find();
    let item7 = await TirePuncture.find();
    let item8 = await TireValve.find();
    res.render("dashboard",{
      employees: item1,
      parkings: item2,
      Batterys: item3,
      Batteryrents: item4,
      Tires: item5,
      TirePressures: item6,
      TirePunctures: item7,
      TireValves: item8,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "sorry could not get table from the database" });
  }
});



//update
router.get("/dashboard/edit/:id", async(req, res) => {
  try {
    const park = await Parking.findOne({_id: req.params.id });
    res.render("editparking",{parking: park});
  }catch(error) {
    res.status(404).send("Sorry couldnot edit table");
    console.log(error);
  }
});

module.exports = router;
