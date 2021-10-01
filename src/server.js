const express = require('express');

const app = express();

const router = express.Router();

app.use(express.json());

const connect = require("./configs/db");

app.set("view engine", "ejs");

app.use(express.static('public'));   //app.use(express.static(__dirname + '/public'));

const Type = require("./models/type.model");
const City = require("./models/city.model");
const Category = require("./models/category.model");
const Internship = require("./models/internships.model");
const Course = require("./models/course.model");
const Cart = require("./models/cart.model");




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

// app.get("/SearchInternships", async (req, res) => {

//     if(){
//         let query = 
//         const internships_data = await Internship.find(query).lean().exec();
//     }
//     else if(){

//     }
    
//     console.log("AllInternships")
//     res.render("internship", {       // name of file in views
//         internships_data: internships_data        // data collected from router.get await function
//     })
// })

app.get("/Courses", async (req, res) => {

    const courses_data = await Course.find().lean().exec();
    //console.log(course);

     res.render("course",{
         courses_data:courses_data
    })
})


app.get("/Cart", async (req, res) => {

    // ["6154454a925b91c4426bbaf4","6154458f925b91c4426bbaf6"]
    // ["61544487925b91c4426bbaef","61544503925b91c4426bbaf2"]
    const carts_data = await Course.find({_id:["61544487925b91c4426bbaef","61544503925b91c4426bbaf2"]}).lean().exec();
    console.log(carts_data);

     res.render("cart",{
         
         carts_data:carts_data
    })
})


app.get("/Payment-Options", async (req, res) => {

  //  const carts_data = await Cart.find().lean().exec();
    //console.log(course);

     res.render("payment_opt",{})
})



app.get("/Debit-Card-Details", async (req, res) => {

    //  const carts_data = await Cart.find().lean().exec();
      //console.log(course);
  
       res.render("debit_card",{})
  })

  

app.get("/Marketing-Ambasssador", async (req, res) => {

    //  const carts_data = await Cart.find().lean().exec();
      //console.log(course);
  
       res.render("marketing",{})
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

router.post("", async (req, res) => {

    const course = await Course.create(req.body);
   // console.log(course);
    return res.status(201).send(course);
})

// let cart_arr = JSON.parse(localStorage.getItem("cart_items"));
//     console.log(cart_arr);

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