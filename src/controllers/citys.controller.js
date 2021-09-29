const express = require('express');
//const router = express.Router();

const City = require("../models/city.model");
const router = express.Router();
//app.use(express.json());


router.post("", async (req, res) => {

    const city = await City.create(req.body);
   // console.log(city);
    return res.status(201).send(city);
})


router.get("", async (req, res) => {

    const city = await City.find().lean().exec();
    //console.log(city);

    return res.status(200).send(city);
})

module.exports = router;
