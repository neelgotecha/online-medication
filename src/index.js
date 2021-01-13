require('./dbConnect/mongoose')
const express = require('express')
const patientRouter = require('./router/patient')
const doctorRouter = require('./router/doctor')
const medicineRouter = require('./router/medicine')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(patientRouter)
app.use(doctorRouter)
app.use(medicineRouter)

app.listen(port, ()=>{
    console.log('Server is running on port '+port)
})