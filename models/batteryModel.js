const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const BatterySchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim:true,
    },
    phoneNumber:{
        type:String,
        required: true,
        trim:true,
    },
    nin:{
        type: String,
        required: true,
        trim:true,
    },
    vehicles:{
        type: String,
        required: true,
        trim:true,
    },
    batterytype:{
        type: String,
        required: true,
        trim:true,
    },
    bartterynumber:{
        type: String,
        required: true,
        trim:true,
    },
});

// signupSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("battery", BatterySchema);
