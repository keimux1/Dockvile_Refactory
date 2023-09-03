const express = require("express");
const Parking = require("../models/parkingModel");
const router = express.Router();
const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/parking", (req,res)=>{
  res.render("parking.pug")
});

router.post("/regparking", async (req, res) => {
try {
  const vehicle = new Parking(req.body);
  await vehicle.save();
  console.log(req.body);
  res.redirect("/api/logIn"); // redirect o the employeeform
} catch (error) {
  res.status(400).render("parking");
  console.log(error);
}
});


router.get("/dashboard1" , async(req, res)=>{
  try {
    const parkingCounts = await Parking.countDocuments();
    req.session.parkingCounts = parkingCounts;
    
    res.render("dashboard", {parkingCounts});
  } catch (error) {
    return res.status(400).send({message:"couldn't get data"})
  }
})

router.get("/employee/edit/:id", async (req, res) => {
  try{
     const emp = await Employee.findOne({_id:req.params.id});
     console.log(req.body)
      res.redirect("back");
  }catch{
    res.status(400).send("sorry could not find table from the database");
  }
});

module.exports = router 