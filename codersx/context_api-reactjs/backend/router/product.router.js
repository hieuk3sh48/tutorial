const router = require('express').Router();
const async = require('async');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });

let Product = require('../model/product.model');

/* GET All */
router.get('/',async (req,res)=>{
    await Product.find()
    .then(product=>{res.json(product)})
    .catch(err=>{res.status(400).json('Error: '+err)})
})

/* GET by Id */
router.get('/:id',async (req,res)=>{
    await Product.findById(req.params.id)
    .then(product=>{res.json(product)})
    .catch(err=>{console.log('Error: '+err)})
})

/* POST */
router.post('/add',upload.single('avatar'),async (req,res)=>{
    const name=req.body.name;
    const avatar=req.body.avatar;
    const status=req.body.status;
    const count=Number(req.body.count);
    const information=req.body.information;

    const newProduct = new Product({name,avatar,status,count,information});

    newProduct.save()
    .then(()=>res.json('Product added!'))
    .catch(err=>res.status(400).json('Error: '+err))
})

/* Update */
router.patch('/update/:id',upload.single('avatar'),async (req,res)=>{

    await Product.findByIdAndUpdate(req.params.id)
    .then(product=>{
        product.name=req.body.name;
        product.avatar=req.body.avatar;
        product.status=req.body.status;
        product.count=Number(req.body.count);
        product.information=req.body.information;

        product.save()
        .then(()=>res.json('Product Updated!'))
        .catch(err=>res.status(400).json('Error: '+err));
    })
    .catch(err=>res.status(400).json('Error: '+err))
})

/* DELETE */
router.delete('/delete/:id',async (req,res)=>{

    await Product.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Product deleted!'))
    .catch(err=>res.status(400).json('Error: '+err))
})

module.exports=router;