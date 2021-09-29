
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    image_url : {type: String, required: true},
    course_name : {type: String, required: true},
    description : {type: String, required: true},
    price : {type: Number, required: true},
    emi : {type: Number, required: true},
},{
    versionKey: false,
    timestamps: true
})

 const Course = mongoose.model("course", courseSchema);

 module.exports = Course;
 