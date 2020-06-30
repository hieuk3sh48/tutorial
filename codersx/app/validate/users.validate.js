const db = require('../db.js');

module.exports.create_users=(req,res,next)=>{
  var errors = [];
  if(!req.body.name){
    errors.push('Dien thong tin Name');
  }
  if(!req.body.password){
    errors.push('Dien thong tin Password');
  }
  if(!req.body.email){
    errors.push('Dien thong tin Email');
  }
  if(req.body.name.length>30){
    errors.push('Vuot qua 30 ki tu');
  }
  if(db.get('users').value().find(u=>{return u.email==req.body.email})){
    errors.push('Email ton tai');
  }
  if(errors.length){
    res.render('users/create',{errors});
    return;
  }
  next();
}