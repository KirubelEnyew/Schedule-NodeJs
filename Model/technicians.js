const mongoose = require("mongoose");

const technician = mongoose.Schema({
    technicianName : {
        type : String,
        require : true,
    }
})

const Technician = mongoose.model('technician',technician)
exports.Technician = Technician