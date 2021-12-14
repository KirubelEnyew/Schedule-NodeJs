const mongoose = require('mongoose')

const schedule = mongoose.Schema({
    date : {
        type : String,
        require : true
    },
    companyName : {
        type : String,
        require : true
    },
    contactNumber : {
        type : Number,
        require : true
    },
    location : {
        type : String,
        require : true
    },
    device : {
        type : String,
        require : true
    },
    deviceQty : {
        type : Number,
        require : true
    },
    accessory : {
        type : String,
        require : true
    },
    accessoryQty : {
        type : Number,
        require : true
    },
    technician : {
        type : String,
        require : true
    },
    jobType : {
        type : String,
        require : true
    },
    status : {
        type : String,
        require : true
    },
})
const Schedule = mongoose.model('schedule',schedule)

exports.Schedule = Schedule;