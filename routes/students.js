const express = require("express");
const router = express.Router();
const studentSchema = require("../models/students");

const url =require("url")


router.post("/createData", function(req, res){
    console.log(req.body);
    const studentsData = new studentSchema(req.body);
    studentsData.save(function(err){
        if(err) {
            console.log("Error occurred", err);
        }else {
            console.log("Data saved successfully");
            res.send("student entry added successfully");
        }
    });
});

router.get("/getStudentDetails", function(req, res){
    const path=req.url;
    const queryParamObject = url.parse(path, true).query;
    studentSchema.findOne({name: queryParamObject.name}, { _id: 0, __v: 0} , function(err, data){
        if(err) {
            console.log("Log of error", err);
        }else {
            res.send(data);
        }
    });
});


module.exports = router;