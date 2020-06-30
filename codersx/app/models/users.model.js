const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    isAdmin:String,
    avatar:String
})

const Users = mongoose.model('Users',userSchema,'users');

module.exports=Users;