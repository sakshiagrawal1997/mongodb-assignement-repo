const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const studentsRouter = require("./routes/students");
const quotesRouter = require("./routes/quotes");
const productsRouter = require("./routes/products");

const app = express();

mongoose.connect("mongodb+srv://sakshiagrawal:test24@cluster0.0ejus.mongodb.net/college?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, function(err){
    if(err) {
        console.log("some error in mongodb connnection occured", err);
    }else {
        console.log("connected to database successfully",);
    }
}

);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/students", studentsRouter);
app.use("/quotes", quotesRouter);
app.use("/products", productsRouter);

module.exports = app;
