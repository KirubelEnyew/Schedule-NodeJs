const mongoose = require("mongoose");

const accessory = mongoose.Schema({
    accessoryName : {
        type : String,
        require : true,
    }
})


const Accessory = mongoose.model('accessory',accessory)
exports.Accessory = Accessory