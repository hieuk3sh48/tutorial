const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxlength:10
    },
    avatar:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxlength:20,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    }

})

userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){

        bcrypt.genSalt(10, function(err, salt) {

            if(err)return next(err);
            bcrypt.hash(user.password, salt, function(err, hash) {
                // Store hash in your password DB.
                if(err)return next(err);

                user.password=hash;
                return next()
            });
        });
    }
    else return next()
})

const User = mongoose.model('User', userSchema);

module.exports=User;