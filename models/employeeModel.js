const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const employeeSchema = new mongoose.Schema({
    fullName:{
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
    role:{
        type:String,
        required: true,
        trim:true,
    },
    password:{
        type: String,
        required: true,
        trim:true,
    },
    
});

employeeSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("Employee", employeeSchema);
