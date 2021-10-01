
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

    image_url : {type: String, required: true},
    course_name : {type: String, required: true},
    price : {type: Number, required: true}
},{
    versionKey: false,
    timestamps: true
})

 const Cart = mongoose.model("cart", cartSchema);

 module.exports = Cart;
 