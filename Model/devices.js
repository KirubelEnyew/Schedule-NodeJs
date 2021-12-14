const mongoose = require("mongoose");

const device = mongoose.Schema({
    deviceName : {
        type : String,
        require : true
    }
})

const Device = mongoose.model('device',device)
exports.Device = Device