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
    const parkingCounts = await Parking.countDocuments() || 0;
    const taxiCounts = await Parking.countDocuments({ vehicles:"taxi" }) || 0;
    const PersonalCarCounts = await Parking.countDocuments({ vehicles:"personalCar" }) || 0;
    const truckCounts = await Parking.countDocuments({ vehicles:"truck" }) || 0;
    const CoasterCounts = await Parking.countDocuments({ vehicles:"coaster" }) || 0;
    const bodaCounts = await Parking.countDocuments({ vehicles:"boda" }) || 0;

    const tireCounts = await Parking.countDocuments() || 0;
    const danloptireCounts = await Parking.countDocuments({ tiretype:"truck" }) || 0;
    // const PersonalCarCounts = await Parking.countDocuments({ vehicles:"personalCar" }) || 0;

    let item3 = await Battery.find();
    let item4 = await Batteryrent.find();
    let item5 = await Tire.find();
    let item6 = await TirePressure.find();
    let item7 = await TirePuncture.find();
    let item8 = await TireValve.find();


    // const vehicles2 = await Parking.countDocuments({personalCar: "personalCar"});
    // req.session.vehicles = vehicles

    

    //let amounts = await Parking.aggregate([
    // {"$group": {_id: "$all" , totalAmounts: {$sum: "$amount"}}},
    // ])
    //req.session.amounts = amounts


    // let vehicles = await Parking.aggregate(
    // numberOfTaxi:{$count: "taxi"},
    // );

    res.render("dashboard",{
      employees: item1,
      parkings: item2,
      Batterys: item3,
      Batteryrents: item4,
      Tires: item5,
      TirePressures: item6,
      TirePunctures: item7,
      TireValves: item8,
      parkingCounts,
      taxiCounts,
      PersonalCarCounts,
      truckCounts,
      CoasterCounts,
      bodaCounts,


      // empAges: ages[0].totalAges,

      // taxi:vehicles[0].numberOfTaxi,
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

router.post('/dashboard/edit', async (req, res) => {
  try{
      await Parking.findOneAndUpdate({_id: req.query.id},req.body);
      console.log(req.body);
      res.redirect('/api/dashboard')

  }catch(error){
      res.status(400).send('Could not edit data') 
      console.log(error)

  }
})

module.exports = router;
