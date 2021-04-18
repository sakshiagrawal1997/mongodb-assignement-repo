const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
      productName: String,
      price: Number
},
  {collection: "products"}
);

module.exports = mongoose.model("products", productSchema);
