const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { Schedule } = require('./Model/schedules')
const { Device } = require('./Model/devices')
const { Accessory } = require('./Model/accessories')
const { Technician } = require('./Model/technicians')

mongoose.connect('mongodb://localhost:27017/ScheduleDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected..'))
    .catch((err) => console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/schedules', async (req, res) => {
    const schedule =await Schedule.find().exec()
    console.log(schedule)
    return res.status(200).json({
        message : "schedules retrieved",
        schedule
    })
})
app.get('/accessories', async (req, res) => {
    const accessories = await Accessory.find().exec()
    return res.status(200).json({
        message : "Accessories retrieved",
        accessories
    })
})
app.get('/devices', async (req, res) => {
    const device = await Device.find().exec()
    return res.status(200).json({
        message : "Devices retrieved",
        device
    })
})
app.get('/technicians', async (req, res) => {
    const technician = await Technician.find().exec()
    return res.status(200).json({
        message : "Technicians retrieved",
        technician
    })
})
app.post('/schedule/add', async (req, res) => {
    console.log("Add called")
    Schedule(req.body).save().then((data) => {
        return res.json({
            message: 'new schedule registerd',
            data
        })
    }).catch((err) => res.status(400).json({ error: 'Error' }))
})

app.post('/device/add', async (req, res) => {
    Device(req.body).save().then((data) => {
        return res.json({
            message: 'new device registerd',
            data
        })
    }).catch((err) => res.status(400).json({ error: 'Error' }))
})

app.post('/accessory/add', async (req, res) => {
    Accessory(req.body).save().then((data) => {
        return res.json({
            message: 'new accessory registerd',
            data
        })
    }).catch((err) => res.status(400).json({ error: 'Error' }))
})

app.post('/technician/add', async (req, res) => {
    Technician(req.body).save().then((data) => {
        return res.json({
            message: 'new technician registerd',
            data
        })
    }).catch((err) => res.status(400).json({ error: 'Error' }))
})
app.post('/schedule/edit', async (req, res) => {
    Schedule.findOneAndUpdate({_id:req.query.id},req.body,{
        useFindAndModify : true
    }).then(value => res.send(value))
})
app.delete('/device/remove',async (req,res) => {
    Device.deleteOne({_id:req.query.id}).then(data=>{
        console.log("delete successful")
        res.status(200).json({
            message : "removal done"
        })
    })
})
app.delete('/accessory/remove',async (req,res) => {
    Accessory.deleteOne({_id:req.query.id}).then(data=>{
        console.log("delete successful")
        res.status(200).json({
            message : "removal done"
        })
    })
})
app.delete('/technician/remove',async (req,res) => {
    Technician.deleteOne({_id:req.query.id}).then(data=>{
        console.log("delete successful")
        res.status(200).json({
            message : "removal done"
        })
    })
})
app.listen('5000', () => console.log('server...'))