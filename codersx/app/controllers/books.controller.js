const db = require('../db.js');
const shortid = require('shortid');
const Books = require('../models/books.model.js');

module.exports.books=async (req,res)=>{
  //res.render('books',{books:db.get('books').value()||''})

  var books = await Books.find();
  res.render('books',{books:books});
}

module.exports.create=(req,res)=>{
  res.render('books/create');
}

module.exports.create_post=async (req,res)=>{
  /*const url='https://cdn.glitch.com/508ae2a2-11b1-4ff0-8976-5e89384ba8ed%2Fdownload.png?v=1591340251494';
  req.body.id = shortid.generate();
  req.body.avatar = req.file?req.file.path.split('/').slice(1).join('/'):url;
  db.get('books').push(req.body).write();
  res.redirect('/books');*/

  const url='https://cdn.glitch.com/508ae2a2-11b1-4ff0-8976-5e89384ba8ed%2Fdownload.png?v=1591340251494';
  var book ={
    name:req.body.name,
    avatar:req.file?req.file.path.split('/').slice(1).join('/'):url
  }

  await Books.collection.save(book);
  res.redirect('/books');
}

module.exports.search=async (req,res)=>{
  /*var book = db.get('books').value().filter(b=>{return b.name.indexOf(req.query.q)!==-1});
  res.render('books',{books:book});*/

  var books = await Books.find();
  books=books.filter(book=>{return book.name.indexOf(req.query.q) !== -1});
  res.render('books',{books:books});
}

module.exports.view=async (req,res)=>{
  /*var book = db.get('books').value().find(b=>{return b.id=req.params.id});
  res.render('books/view',{book});*/

  var book = await Books.findOne({"_id":req.params.id});
  res.render('books/view',{book});
}

module.exports.delete=async (req,res)=>{
  /*db.get('books').remove(b=>{return b.id==req.params.id}).write();
  res.redirect('/books');*/

  await Books.deleteOne({"_id":req.params.id});
  res.redirect('/books');
}

module.exports.product=async (req,res)=>{
  /*var book = db.get('books').value().find(b=>{return b.id=req.params.id});
  res.render('books/product',{book});*/

  var book = await Books.findOne({"_id":req.params.id});
  res.render('books/product',{book});
}