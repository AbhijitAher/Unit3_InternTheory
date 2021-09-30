const express = require('express');

const app = express();

const router = express.Router();

app.use(express.json());

const connect = require("./configs/db");

app.set("view engine", "ejs");

const Type = require("./models/type.model");
const City = require("./models/city.model");
const Category = require("./models/category.model");
const Internship = require("./models/internships.model");


// const internships_controller = require("./controllers/internships.controller")
// const course_controller = require("./controllers/courses.controller")

// GET Requests

app.get("/InternTheory", async (req, res) => {

    const types_data = await Type.find().lean().exec();
    const cities_data = await City.find().lean().exec();
    const category_data = await Category.find().lean().exec();

    res.render("Home", {            // name of file in views
        types_data: types_data, 
        cities_data: cities_data,
        category_data: category_data,                // data collected from router.get await function
    })
})

app.get("/AllInternships", async (req, res) => {

    const internships_data = await Internship.find().lean().exec();
    console.log("AllInternships")
    res.render("internship", {       // name of file in views
        internships_data: internships_data        // data collected from router.get await function
    })
})


// POST Requests

router.post("", async (req, res) => {

    const types = await Type.create(req.body);
   // console.log(types);
    return res.status(201).send(types);
})

router.post("", async (req, res) => {

    const city = await City.create(req.body);
   // console.log(city);
    return res.status(201).send(city);
})

router.post("", async (req, res) => {

    const category = await Category.create(req.body);
   // console.log(category);
    return res.status(201).send(category);
})

router.post("", async (req, res) => {

    const internships = await Internship.create(req.body);
   // console.log(internships);
    return res.status(201).send(internships);
})


//console.log(internships_controller);

// app.use("/internships", internships_controller);

// app.use("/types", type_controller);

// app.use("/citys", city_controller);

// app.use("/categorys", category_controller);

// app.use("/courses", course_controller);




app.listen(2345, async ()=> {
    await connect();
    console.log("listening on port 2345");

})