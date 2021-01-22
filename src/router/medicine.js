const express = require('express')
const Medicine = require('../model/medicine')
medicineRouter = express.Router()

medicineRouter.post('/medicine',async (req,res)=>{
    const med = new Medicine(req.body)
    try{
        await med.save()
        res.status(201).send(med)
    }catch(e){
        res.status(400).send(e)
    }
})

medicineRouter.get('/medicine/:patientEmail', async (req,res)=>{
    try{
        const patientMedicines = await Medicine.find({patientEmail:req.params.patientEmail})
        if(!patientMedicines){
            return res.status(404).send()
        }
        res.send(patientMedicines)
    }catch(e){
        res.status(400).send()
    }
})
// not tested through postman yet
medicineRouter.delete('/medicine/:id', async (req,res)=>{
    try{
        const medicine = await Medicine.findByIdAndDelete(req.params.id)
        if(!medicine){
            res.status(404).send()
        }
        res.send(medicine)
    }catch(e){
        res.status(400).send()
    }
})

medicineRouter.patch('/medicine/:id', async (req,res)=>{
    try{
        const medicine = Medicine.findByIdAndUpdate(req.params.id,req.body, 
            {new:true, runValidators:true})
        if(!medicine){
            res.status(404).send()
        }
        res.send(medicine)
    }catch(e){
        res.status(400).send()
    }
})

module.exports = medicineRouter