const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");

const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConfig");

const port = process.env.PORT || 3000;

const app = express();

const Signup = require("./models/employeeModel")

const parkingRoutes = require("./controllers/parkingRoutes");
const batteryRoutes = require("./controllers/batteryRoutes");
const tireRoutes = require("./controllers/tireRoutes");
const employeeRoutes = require("./controllers/employeeRoutes");
const dashboardRoutes = require("./controllers/dashboardRoutes");

const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDB();

app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("veiws", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(expressSession)
app.use(passport.initialize());
app.use(passport.session());

passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser())
passport.deserializeUser(Signup.deserializeUser())

app.use("/api", dashboardRoutes);
app.use("/api", parkingRoutes);
app.use("/api", batteryRoutes);
app.use("/api", tireRoutes);
app.use("/api", employeeRoutes);


app.listen(port, () => {
  console.log("Server is running on port " + port);
});
