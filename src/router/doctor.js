const express = require('express')
const Doctor = require('../model/doctor')
const doctorRouter = express.Router()

doctorRouter.post('/doctor',async (req,res)=>{
    const doctor = new Doctor(req.body)
    try{
        await doctor.save()
        res.status(201).send(doctor)
    }catch(e){
        res.status(400).send()
    }
})

doctorRouter.post('/doctor/login',async (req,res)=>{
    try{
        const doctor = await Doctor.findOne({email:req.body.email})
        if(!doctor){
            return res.status(404).send()
        }
        if(doctor.password === req.body.password){
            return res.send(doctor)
        }
        res.status(400).send()
    }catch(e){
        res.status(400).send(e)
    }
})

doctorRouter.get('/doctor/:email',async (req,res)=>{
    try{
        const doctor = await Doctor.findOne({email:req.params.email})
        if(!doctor){
            return res.status(404).send()
        }
        res.send(doctor)
    }
    catch(e){
        res.status(400).send()
    }
})

doctorRouter.patch('/doctor/:email', async (req,res)=>{
    try{
        const doctor = await Doctor.findOneAndUpdate({email:req.params.email},
            req.body, {new:true,runValidators:true})
        if(!doctor){
            return res.status(404).send()
        }
        res.send(doctor)
    }catch(e){
        res.status(400).send()
    }
})

doctorRouter.delete('/doctor/:email', async (req,res)=>{
    try{
        const doctor = await Doctor.findOneAndDelete({email:req.params.email})
    if(!doctor){
        return res.status(404).send()
    }
    res.send(doctor)
    }catch(e){
        res.status(400).send()
    }
})
module.exports = doctorRouter