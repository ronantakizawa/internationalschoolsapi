const Schools = require("./schema");
const setOrder = require("./setorder")


const getAll = (req,res) =>
{
    Schools.find().sort({'fees': -1}).then((result)=>
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
    Schools.find({"region":regionname}).sort({'fees':-1}).then((result)=>
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
    Schools.find({"region":regionname}).sort({'fees':setOrder(order)}).then((result)=>
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

const getByRegionSortCurriculum = (req,res) =>
{
    const {regionname} = req.params;
    const{curriculumname} = req.params;
    Schools.find({"region":regionname,"curriculum":curriculumname}).then((result)=>
    {
        res.send(result);
    }
    ).catch((err)=>{
        console.log(err);
    });
}

const getByRegionWithCap = (req,res) =>
{

    const {regionname} = req.params;
    const capvalue = parseInt(req.params.capvalue);
    console.log(capvalue);
    Schools.find({"region":regionname ,"fees":{$lte:capvalue}}).then((result)=>
    {
        res.send(result);
    }
    ).catch((err)=>{
        console.log(err);
    });

}




module.exports = {getAll,getByName,getByRegion,getByRegionSortFees,
    getByRegionSortCurriculum,getByRegionSortNumberofStudents,getByRegionWithCap};


