const express = require("express");
const router = express.Router();
const productSchema = require("../models/products");

router.post("/add", function(req, res){
    console.log(req.body);
    const productsData = new productSchema(req.body);
    productsData.save(function(err){
        if(err) {
            console.log("Error occurred", err);
        }else {
            console.log("Data saved successfully");
            res.send({"result": "success"});
        }
    });
});

router.get("/getAll", function(req, res){
    productSchema.find({}, { _id: 0, __v: 0}, function(err, data){
          if(err) {
              console.log("Log of error", err);
          }else {
              res.send(data);
          }
    });
});


module.exports = router;
