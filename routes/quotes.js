 const express = require("express");
 const router = express.Router();
 const quoteSchema = require("../models/quotes");

  const url =require("url")

 router.post("/add", function(req, res){
    console.log(req.body);
    const quotesData = new quoteSchema(req.body);
    quotesData.save(function(err){
        if(err) {
            console.log("Error occur", err);
        }else {
            console.log("Quotes saved successfully");
            res.send({"result": "success"});
        }
    });
 });

 router.get("/getAll", function(req, res){
      quoteSchema.find({}, { _id: 0, __v: 0}, function(err, data){
            if(err) {
                console.log("Log of error", err);
            }else {
                res.send(data);
            }
      });
 });



 module.exports = router;