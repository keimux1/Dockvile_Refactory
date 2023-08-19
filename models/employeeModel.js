const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const employeeSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        trim:true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim:true,
    },
    phoneNumber:{
        type:String,
        required: true,
        unique: true,
        trim:true,
    },
    password:{
        type: String,
        required: true,
        trim:true,
    },
    

});

// signupSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("Employee", employeeSchema);
