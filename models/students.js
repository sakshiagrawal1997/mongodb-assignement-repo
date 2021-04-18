const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
    name: String,
    collegeName: String,
    location: String
},
 {collection: "students"}
);

module.exports = mongoose.model("students", studentSchema);