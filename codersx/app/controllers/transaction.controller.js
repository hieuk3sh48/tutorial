const shortid = require('shortid');
const db = require('../db.js');

module.exports.transaction=function(req,res){res.render('transaction',{transaction:db.get('transaction').value()||''})};
module.exports.create=function(req,res){res.render('transaction/create',{users:db.get('users').value(),books:db.get('books').value()})};
module.exports.create_post=function(req,res){
  req.body.id = shortid.generate();
  req.body.iscomplete = true;
  var user = db.get('users').value().find(u=>{return u.id==req.body.userId});
  var book = db.get('books').value().find(b=>{return b.id==req.body.bookId});
  req.body.userName = user?user.name:'';
  req.body.bookName = book?book.name:'';
  db.get('transaction').push(req.body).write();
  res.redirect('/transaction');
};
module.exports.search=function(req,res){
  var q = req.query.q;
  var tran = db.get('transaction').value().filter(t=>{return t.userName.indexOf(q)!==-1});
  res.render('transaction',{transaction:tran});
};
module.exports.view=function(req,res){
  var tran = db.get('transaction').value().find(t=>{return t.id==req.params.id})||'';
  res.render('transaction/view',{tran});
};
module.exports.delete=function(req,res){
  db.get('transaction').remove(t=>{return t.id==req.params.id}).write();
  res.redirect('/transaction')
};
module.exports.complete=function(req,res){
  var id = req.params.id;
  res.redirect('/transaction');
};
module.exports.complete_post=function(req,res){
  var iscomplete = req.body.iscomplete;
  var id = req.params.id;
  console.log(id);
  db.get('transaction').value().filter(t=>{
    return t.iscomplete=t.id==id?!iscomplete:t.iscomplete
  });
  res.redirect('/transaction');
};
