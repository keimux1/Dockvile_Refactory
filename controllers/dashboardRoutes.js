const express = require("express");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");


router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
