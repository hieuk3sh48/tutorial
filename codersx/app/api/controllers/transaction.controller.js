const Transaction = require('../../models/transaction.model.js');

module.exports.transaction=async (req,res)=>{

    var transaction = await Transaction.find();
    res.json(transaction);
}