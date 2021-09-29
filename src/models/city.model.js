
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({

    city_name : {type: String, required: true}
   
},{
    versionKey: false,
    timestamps: true
})

 const City = mongoose.model("city", citySchema);

 module.exports = City;
 