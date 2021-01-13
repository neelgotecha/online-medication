const mongoose = require('mongoose')
const validator = require('validator')

const Doctor = mongoose.model('Doctor', {
    email: {
        type:String,
        required:true,
        trim:true,
        unique: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Enter valid email')
            }
        }
    },
    registrationId:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    clinicName:{
        type:String,
        required:true,
        trim:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:5
    },
    phoneNumber:{
        type:Number,
        trim:true
    },
})
module.exports = Doctor