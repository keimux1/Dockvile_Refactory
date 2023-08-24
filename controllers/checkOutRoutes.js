const express = require("express");
const router = express.Router();
// const {ensureLoggedIn} = require("connect-ensure-login");

router.get("/CheckOut", (req, res) => {
  res.render("check out");
});

module.exports = router;
