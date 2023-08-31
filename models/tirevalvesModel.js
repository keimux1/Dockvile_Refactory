const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const TirevalveSchema = new mongoose.Schema({
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
    vehicles:{
        type: String,
        required: true,
        trim:true,
    },
    valvenumber:{
        type: String,
        required: true,
        trim:true,
    },
    valveprice:{
        type: Number,
        required: true,
        trim:true,
    },
});


// signupSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("tirevalve", TirevalveSchema);
