const express = require("express")
const mongoose = require("mongoose");
require('dotenv').config();
const functions = require("./functions");
const app = express();
app.use(express.json());

mongoose.connect(process.env.dbURI).then((result)=> app.listen(8000,()=>console.log("LIVE")) ).catch((err)=>console.log(err));



app.get('/',functions.homepage);

app.get('/all', functions.getAll);

app.get('/name/:queryname', functions.getByName);

app.get('/:regionname', functions.getByRegion);

app.get('/:regionname/sortbyfees/:order', functions.getByRegionSortFees);

app.get('/:regionname/sortbynumberofstudents/:order', functions.getByRegionSortNumberofStudents);

