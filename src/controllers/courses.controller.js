const express = require('express');
//const router = express.Router();

const Course = require("../models/course.model");
const router = express.Router();
//app.use(express.json());


router.post("", async (req, res) => {

    const course = await Course.create(req.body);
   // console.log(course);
    return res.status(201).send(course);
})


router.get("", async (req, res) => {

    const course = await Course.find().lean().exec();
    //console.log(course);

    return res.status(200).send(course);
})

module.exports = router;
