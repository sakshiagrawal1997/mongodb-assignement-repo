const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema(
    {
        quote: String,
        author: String
},
  {'collection': 'quotes'}
);

module.exports = mongoose.model("quotes", quoteSchema);