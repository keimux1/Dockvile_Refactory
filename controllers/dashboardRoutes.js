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
const {ensureLoggedIn} = require("connect-ensure-login");


router.get("/editparking", (req, res) => {
  res.render("editparking");
});

router.get("/dashboard", ensureLoggedIn('/api/login'), async (req, res) => {
  try {
    let item1 = await Employee.find();
    let item2 = await Parking.find();
    const parkingCounts = await Parking.countDocuments() || 0;
    const taxiCounts = await Parking.countDocuments({ vehicles:"taxi" }) || 0;
    const PersonalCarCounts = await Parking.countDocuments({ vehicles:"personalCar" }) || 0;
    const truckCounts = await Parking.countDocuments({ vehicles:"truck" }) || 0;
    const CoasterCounts = await Parking.countDocuments({ vehicles:"coaster" }) || 0;
    const bodaCounts = await Parking.countDocuments({ vehicles:"boda" }) || 0;

    const tireCounts = await Tire.countDocuments() || 0;
    const DunloptireCounts = await Tire.countDocuments({ tiretype:"Dunlop" }) || 0;
    const GoodYearTireCounts = await Tire.countDocuments({ tiretype:"Good Year"}) || 0;
    const ToyoTireCounts = await Tire.countDocuments({ tiretype:"Toyo Tire"}) || 0;
    const MichelinTireCounts = await Tire.countDocuments({ tiretype:"Michelin"}) || 0;

    const batteryrentCounts = await Batteryrent.countDocuments() || 0; 
    const DunlopbatteryrentCounts = await Batteryrent.countDocuments({ batterytype:"Dunlop" }) || 0;
    const GoodYearbatteryrentCounts = await Batteryrent.countDocuments({ batterytype:"Good Year"}) || 0;
    const ToyobatteryrentCounts = await Batteryrent.countDocuments({ batterytype:"Toyo Tire"}) || 0;
    const MichelinbatteryrentCounts = await Batteryrent.countDocuments({ batterytype:"Michelin"}) || 0;

    const batteryPruchaseCounts = await Battery.countDocuments() || 0;
    const DunlopbatteryPruchaseCounts = await Battery.countDocuments({ batterytype:"Dunlop" }) || 0;
    const GoodYearbatteryPruchaseCounts = await Battery.countDocuments({ batterytype:"Good Year"}) || 0;
    const ToyobatteryPruchaseCounts = await Battery.countDocuments({ batterytype:"Toyo Tire"}) || 0;
    const MichelinbatteryPruchaseCounts = await Battery.countDocuments({ batterytype:"Michelin"}) || 0;

    let item3 = await Battery.find();
    let item4 = await Batteryrent.find();
    let item5 = await Tire.find();
    let item6 = await TirePressure.find();
    let item7 = await TirePuncture.find();
    let item8 = await TireValve.find();
    
    let parkingAmounts = await Parking.aggregate([
    {"$group": {_id: "$all" , totalParkingAmounts: {$sum: "$parkingPrice"}}},
    ])
    // req.session.amounts = amounts

    let batteryRentAmounts = await Batteryrent.aggregate([
    {"$group": {_id: "$all" , totalbatteryRentAmounts: {$sum: "$bartteryprice"}}},
    ])

    let batterypurchaseAmounts = await Batteryrent.aggregate([
    {"$group": {_id: "$all" , totalbatterypurchaseAmounts: {$sum: "$bartteryprice"}}},
    ])

    let TireAmounts = await Tire.aggregate([
    {"$group": {_id: "$all" , totalTireAmount: {$sum: "$tireprice"}}},
    ])

    let TirePressureAmounts = await TirePressure.aggregate([
    {"$group": {_id: "$all" , totalTirePressureAmount: {$sum: "$tireprice"}}},
    ])

    let TirePunctureAmounts = await TirePuncture.aggregate([
    {"$group": {_id: "$all" , totalTirePunctureAmount: {$sum: "$tirepunctureprice"}}},
    ])

    let TireValvesAmounts = await TireValve.aggregate([
      {"$group": {_id: "$all" , totalTireValvesAmount: {$sum: "$valveprice"}}},
    ])
  


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

      tireCounts,
      DunloptireCounts,
      GoodYearTireCounts,
      ToyoTireCounts,
      MichelinTireCounts,

      batteryrentCounts,
      DunlopbatteryrentCounts,
      GoodYearbatteryrentCounts,
      ToyobatteryrentCounts,
      MichelinbatteryrentCounts,

      batteryPruchaseCounts,
      DunlopbatteryPruchaseCounts,
      GoodYearbatteryPruchaseCounts,
      ToyobatteryPruchaseCounts,
      MichelinbatteryPruchaseCounts,

      parkingAmounts:parkingAmounts[0].totalParkingAmounts,
      batteryRentAmounts:batteryRentAmounts[0].totalbatteryRentAmounts,
      batterypurchaseAmounts:batterypurchaseAmounts[0].totalbatterypurchaseAmounts,
      TireAmounts:TireAmounts[0].totalTireAmount,
      TirePressureAmounts:TirePressureAmounts[0].totalTirePressureAmount,
      TirePunctureAmounts:TirePunctureAmounts[0].totalTirePunctureAmount,
      TireValvesAmounts:TireValvesAmounts[0].totalTireValvesAmount,

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

router.get("/dashboard/receipt/:id", async(req, res) => {
  try {
    const park = await Parking.findOne({_id: req.params.id });
    res.render("receipt",{parking: park});
  }catch(error) {
    res.status(404).send("Sorry couldnot edit table");
    console.log(error);
  }
});

module.exports = router;
