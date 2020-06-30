const mongoose = require('mongoose');

const TransactionSchema= new mongoose.Schema({
    userId:String,
    bookId:String,
    iscomplete:Boolean,
    userName:String,
    bookName:String
})

const Transaction = mongoose.model('Transaction',TransactionSchema,'transaction');

module.exports=Transaction;