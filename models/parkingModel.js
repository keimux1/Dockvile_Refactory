const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const parkingSchema = new mongoose.Schema({
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
    numberPlate:{
        type: String,
        required: true,
        trim:true,
    },
    vehicles:{
        type: String,
        required: true,
        trim:true,
    },
    color:{
        type: String,
    },
    parkingSlot:{
        type: String,
        required: true,
        trim:true,
    },
    timeIn:{
        type: String,
        // required: true,
        trim:true,
    },
    dateIn:{
        type: String,
        required: true,
        trim:true,
    },
    timeOut:{
        type: String,
        trim:true,
    },
    dateOut:{
        type: String,
        trim:true,
    },
    parkingPrice:{
        type: String,
        required: true,
        trim:true,
    },
});

// signupSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("parking", parkingSchema);
