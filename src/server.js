const express = require('express');

const app = express();

app.use(express.json());

const connect = require("./configs/db");


const internships_controller = require("./controllers/internships.controller")

const city_controller = require("./controllers/citys.controller")

const type_controller = require("./controllers/types.controller")

const category_controller = require("./controllers/categorys.controller")

const course_controller = require("./controllers/courses.controller")



//console.log(internships_controller);

app.use("/internships", internships_controller);

app.use("/citys", city_controller);

app.use("/categorys", category_controller);

app.use("/types", type_controller);

app.use("/courses", course_controller);




app.listen(2345, async ()=> {
    await connect();
    console.log("listening on port 2345");

})