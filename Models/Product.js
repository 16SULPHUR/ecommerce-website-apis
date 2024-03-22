const mongoose = require('mongoose')

const SingleProductSchema = new mongoose.Schema({
    title:String,
    description:String,
    thumbnail:{
        type:String,
        default: ""
    },
    images:[String],
    price:Number
}) 

const VarientSchema = new mongoose.Schema({
    color:String,
    images:[String],
    thumbnail:[String]
}) 

const VarientProductSchema = new mongoose.Schema({
    title:String,
    description:String,
    thumbnail:String,
    varients:[VarientSchema],
    price:Number
}) 

module.exports = {
    SingleProduct: mongoose.model("SingleProduct", SingleProductSchema),
    VariantProduct: mongoose.model("VariantProduct", VarientProductSchema)
};
