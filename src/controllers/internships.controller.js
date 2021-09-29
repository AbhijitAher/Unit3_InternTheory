const express = require('express');
//const router = express.Router();

const Internship = require("../models/internships.model");
const router = express.Router();
//app.use(express.json());


router.post("", async (req, res) => {

    const internships = await Internship.create(req.body);
   // console.log(internships);
    return res.status(201).send(internships);
})


router.get("", async (req, res) => {

    const internships = await Internship.find().lean().exec();
    //console.log(internships);

    return res.status(200).send(internships);
})

module.exports = router;

// app.post("", async (req, res) => {

//     const company = await Company.create(req.body);

//     return res.status(201).send(company);

// })



// // API for get Company as Rating

// app.get("/vacancy", async (req, res) => {

//     const company = await Company.find().sort({job_vacant: -1}).limit(1).lean().exec();
//     return res.status(200).send(company);
// })



// //API for getting Company Details


// app.get("/:id", async (req, res) => {

//     const company = await Company.find({name: req.params.id}, {detail: 1}).lean().exec();
//     return res.status(200).send(company);
// })




// module.exports = app;