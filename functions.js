const Schools = require("./schema");
const setOrder = require("./setorder")
const fs = require('fs');



const homepage = (req,res) =>
{
    res.sendFile(__dirname + '/intro.html');
}

const getAll = (req,res) =>
{
    Schools.find().sort({'fees(USD)': -1}).then((result)=>
    {
        res.send(result);
    }
    ).catch((err)=>{
        console.log(err);
    });

}

const getByRegion = (req,res) =>
{
    const {regionname} = req.params;
    Schools.find({"region":regionname}).sort({'fees(USD)':-1}).then((result)=>
    {
        res.send(result);
    }
    ).catch((err)=>{
        console.log(err);
    });
}

const getByName = (req,res) =>
{
    const {queryname} = req.params;
    Schools.find({"name":queryname}).then((result)=>
    {
        res.send(result);
    }
    ).catch((err)=>{
        console.log(err);
    });
}

const getByRegionSortFees = (req,res) =>
{
    const {regionname} = req.params;
    const{order} = req.params;
    Schools.find({"region":regionname}).sort({'fees(USD)':setOrder(order)}).then((result)=>
    {
        res.send(result);
    }
    ).catch((err)=>{
        console.log(err);
    });
}

const getByRegionSortNumberofStudents = (req,res) =>
{
    const {regionname} = req.params;
    const{order} = req.params;
    Schools.find({"region":regionname}).sort({'numberofstudents':setOrder(order)}).then((result)=>
    {
        res.send(result);
    }
    ).catch((err)=>{
        console.log(err);
    });
}






module.exports = {getAll,getByName,getByRegion,getByRegionSortFees,getByRegionSortNumberofStudents,homepage};


