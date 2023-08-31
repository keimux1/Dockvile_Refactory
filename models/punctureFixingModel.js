const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const punctureFixingSchema = new mongoose.Schema({
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
    tiretype:{
        type: String,
        required: true,
        trim:true,
    },
    tiresize:{
        type: String,
        // required: true,
        trim:true,
    },
    tirenumber:{
        type: String,
        required: true,
        trim:true,
    },
    tirepunctureprice:{
        type: Number,
        required: true,
        trim:true,
    },
});

// signupSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("punctureFixing", punctureFixingSchema);
