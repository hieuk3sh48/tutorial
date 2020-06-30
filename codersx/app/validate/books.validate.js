module.exports.create_books=(req,res,next)=>{
  var errors = [];
  if(!req.body.name){
    errors.push('Khong co du lieu Name');
  }
  if(req.body.name.length>30){
    errors.push('Qua 30 ki tu');
  }
  if(errors.length){
    res.render('books/create',{errors});
    return;
  }
  next();
}