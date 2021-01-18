const mongoose = require('mongoose')

const Medicine = mongoose.model('Medicine',{
    doctorEmail:{
        type:String,
        required:true,
        trim :true
    },
    patientEmail:{
        type:String,
        required:true,
        trim:true
    },
    medName:{
        type:String,
        required:true,
        trim:true
    },
    medCompany:{
        type:String,
        required:true,
        trim:true
    },
    quantity:{
        type:Number,
        min:0,
        required:true
    },
    ordered:{
        type:Number,
        min:0,
        default:0
    },
    prescribedOn:{
        type: Date,
        default: Date.now
    }
})
module.exports = Medicine