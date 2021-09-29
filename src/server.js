const express = require('express');

const app = express();

app.use(express.json());

const connect = require("./configs/db");


const internships_controller = require("./controllers/internships.controller")


app.use("/internships", internships_controller);

app.listen(2345, async ()=> {
    await connect();
    console.log("listening on port 2345");

})