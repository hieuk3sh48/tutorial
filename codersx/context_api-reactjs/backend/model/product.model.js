const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const productSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    },
    avatar:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        required:true,
        trim:true,
    },
    count:{
        type:Number,
        required:true,
        trim:true,
        maxlength:20
    },
    information:{
        type:String,
        required:true,
        trim:true,
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports=Product;