const express = require('express');
//const router = express.Router();

const Category = require("../models/category.model");
const router = express.Router();
//app.use(express.json());


router.post("", async (req, res) => {

    const category = await Category.create(req.body);
   // console.log(category);
    return res.status(201).send(category);
})


router.get("", async (req, res) => {

    const category = await Category.find().lean().exec();
    //console.log(category);

    return res.status(200).send(category);
})

module.exports = router;
