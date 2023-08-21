const express = require("express");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/dashboard", (req, res) => {
  res.render("Dashboard");
});


// router.post("/regemployee", async (req, res) => {
//     console.log("signing ur the employee");
//   try {
//     const employee = new Employee(req.body);
//     await employee.save();
//     console.log(req.body);
//     res.redirect("/api/logIn"); // redirect o the employeeform
//   } catch (error) {
//     res.status(400).render("signup");
//     console.log(error);
//   }
// });


module.exports = router;
