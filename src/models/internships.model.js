
const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({

    image_url : {type: String, required: true},
    title : {type: String, required: true},
    company_name : {type: String, required: true},
    type : {type: String, required: true},
    category : {type: String, required: true},
    cities : {type: Object, required: true},
    stipend: {type: String, required: true},
    time_left : {type: String, required: true}
   
},{
    versionKey: false,
    timestamps: true
})

 const Internship = mongoose.model("internship", internshipSchema);

 module.exports = Internship;
 


//  {
//     "image_url":"https://assets.interntheory.com/uploads/company/companylogos/e3d2573e2..."
//     "title"  :  "Operations Internship In Real Estate"
//     "company_name"  : "The Property Exchange"
//     "type"   : "Full Time Internship"
//     "category"   :  "Real Estate"
//     "cities"   :   "Mumbai"
//     "stipend"   :   "5000 - 15000 per month"
//     "time_left"   :  "4 weeks left"
//  }