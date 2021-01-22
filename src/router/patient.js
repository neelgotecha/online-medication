const Patient = require('../model/patient')
const express = require('express')
patientRouter = express.Router()

// CRUD and login
patientRouter.post('/patient',async (req,res)=>{
    const patient = new Patient(req.body)
    try{    
        await patient.save()
        res.status(201).send(patient)
    }catch(e){
        res.status(400).send(e)
    }
})

patientRouter.patch('/patient/:email', async (req,res)=>{
    try{
        const patient = await Patient.findOneAndUpdate({email:req.params.email},
            req.body,{new:true, runValidators:true})
        if(!patient){
            return res.status(404).send()
        }
        res.send(patient)
    }catch(e){
        res.status(400).send(e)
    }  
})

patientRouter.post('/patient/login', async (req,res)=>{
    try{
        const patient = await Patient.findOne({email:req.body.email})
        if(!patient){
            res.status(404).send()
        }
        if(patient.password === req.body.password){
            return res.send(patient)
        }
        res.status(400).send()
    }catch(e){
        res.status(400).send(e)
    }  
})

patientRouter.get('/patient/:email', async (req,res)=>{
    try{
        const patient = await Patient.findOne({email:req.params.email})
        if(!patient){
            return res.status(404).send()
        }
        res.send(patient)
    }catch(e){
        res.status(400).send(e)
    }
})

patientRouter.delete('/patient/:email', async (req,res)=>{
    try{
        const patient = await Patient.findOneAndDelete({email:req.params.email})
        if(!patient){
            return res.status(404).send
        }
        res.send(patient)
    }catch(e){
        res.status(400).send(e)
    }
})
module.exports = patientRouter