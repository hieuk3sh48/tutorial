const db = require('../db.js');
const shortid = require('shortid');
const Users = require('../models/users.model.js');

module.exports.users=async (req,res)=>{
  //res.render('users',{users:db.get('users').value()||''})

  var users = await Users.find();
  res.render('users',{users:users})
}

module.exports.create=(req,res)=>{
  res.render('users/create');
}

module.exports.create_post=async (req,res)=>{
  /*const url = 'https://cdn.glitch.com/508ae2a2-11b1-4ff0-8976-5e89384ba8ed%2Fdefault-picture_0_0.png?v=1591328786694';
  req.body.id=shortid.generate();
  req.body.isAdmin = req.body.isAdmin || 'false';
  req.body.avatar = req.file?req.file.path.split('/').slice(1).join('/'):url;
  db.get('users').push(req.body).write();
  res.redirect('/users');*/

  const url = 'https://cdn.glitch.com/508ae2a2-11b1-4ff0-8976-5e89384ba8ed%2Fdefault-picture_0_0.png?v=1591328786694';
  var user = {
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    isAdmin:req.body.isAdmin||'false',
    avatar:req.file?req.file.path.split('/').slice(1).join('/'):url
  };
  await Users.collection.save(user);
  res.redirect('/users');

};

module.exports.search=async (req,res)=>{
  /*var user = db.get('users').value().filter(u=>{return u.name.indexOf(req.query.q)!==-1});
  res.render('users',{users:user});*/

  var users =  await Users.find();
  users = users.filter(u=>{return u.name.indexOf(req.query.q) !==-1});
  res.render('users',{users:users});
}

module.exports.view=async (req,res)=>{
  /*var user = db.get('users').value().find(u=>{return u.id=req.params.id});
  res.render('users/view',{user});*/

  var user = await Users.findOne({"_id":req.params.id});
  res.render('users/view',{user});
}
module.exports.delete=async (req,res)=>{
  /*db.get('users').remove(u=>{return u.id==req.params.id}).write();
  res.redirect('/users');*/

  await Users.deleteOne({"_id":req.params.id});
  res.redirect('/users');
}