const express = require("express");
const Employee = require("../models/employeeModel");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/signUp", (req, res) => {
    console.log("signing ur the employee");
  res.render("signup");
});

router.get("/logIn", (req, res) => {
  res.render("Dockvile_login");
});

router.post("/regemployee", async (req, res) => {
    console.log("signing ur the employee");
  try {
    const employee = new Employee(req.body);
    await employee.save();
    console.log(req.body);
    res.redirect("/api/logIn"); // redirect o the employeeform
  } catch (error) {
    res.status(400).render("signup");
    console.log(error);
  }
});


router.get("/keimux", (req, res) => {
  res.render("keimux");
});

// router.get("/dashboard", (req, res) => {
//   res.render("Dashboard");
// });


module.exports = router;
