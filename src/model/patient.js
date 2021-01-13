const mongoose = require('mongoose')
const validator = require('validator')

const Patient = mongoose.model('Patient', {
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
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age should be a positive number')
            }
        }
    },
    phoneNumber:{
        type:Number,
        trim:true
    },
    address:{
        type:String,
        trim:true
    }
})
module.exports = Patient