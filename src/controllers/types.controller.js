const express = require('express');
//const router = express.Router();

const Type = require("../models/type.model");
const router = express.Router();
//app.use(express.json());


router.post("", async (req, res) => {

    const types = await Type.create(req.body);
   // console.log(types);
    return res.status(201).send(types);
})


router.get("", async (req, res) => {

    const types = await Type.find().lean().exec();
    //console.log(types);

    return res.status(200).send(types);
})

module.exports = router;
