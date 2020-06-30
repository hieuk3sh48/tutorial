const mongoose = require('mongoose');

const BooksSchema= new mongoose.Schema({
    name:String,
    avatar:String
})

const Books =  mongoose.model('Books',BooksSchema,'books');

module.exports=Books;