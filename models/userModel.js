const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim:true,
    },
    lastname:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
       
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    telephone:{
        type:String,
        required: true,
        unique: true
    },
    role:{
        type: String,
        // required: true,
    },
    branch:{
        type: String
    },
    password:{
        type: String,
        required: true,
        trim:true
    },
    

});

// signupSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("Signup", signupSchema);
