const express = require("express");
const Employee = require("../models/employeeModel");
const passport = require("passport");
const router = express.Router();
//const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/signUp", (req, res) => {
  console.log("signing ur the new employee");
  res.render("signup");
});

router.post("/regemployee", async (req, res) => {
  console.log("signing ur the employee");
  try {
    const employee = new Employee(req.body);
    console.log(req.body);
    await Employee.register(employee, req.body.password);
    //await employee.save(); since this is not an ordinary model
    res.redirect("/api/logIn"); // redirect o the employeeform
  } catch (error) {
    res.status(400).render("signup");
    console.log(error);
  }
});

router.get("/logIn", (req, res) => {
  res.render("Dockvile_login");
});

router.post( "/login",passport.authenticate("local", { failureRedirect: "/api/logIn" }),
  (req, res) => {
    req.session.user = req.user;
    let loggedInuser = req.session.user.fullName;
    console.log(loggedInuser);
    if (req.session.user.role ==="manager") {
      res.redirect("/api/dashboard");
    }
    if (req.session.user.role ==="employee") {
      res.redirect("/api/parking");
    }
  }
);

// router.post("/login",passport.authenticate("local", { failureRedirect: "/api/logIn" }),
//   (req, res) => {
//     req.session.user = req.user;
//     res.redirect("/api/parking");
//   }
// );

router.get("/logOut", (req, res) => {
   req.session.destroy(
    res.redirect("/api/logIn")
   );
});

//delete employees
router.post("/employee/delete", async (req, res) => {
  try {
    await Employee.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch {
    res.status(400).send("sorry could not delete table from the database");
  }
});

module.exports = router;
