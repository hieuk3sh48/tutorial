const router =require('express').Router();
const async= require('async');
const bcrypt = require('bcryptjs');

let User = require('../models/user.models');

/* GET All*/
router.route('/').get((req,res)=>{
    User.find()
        .then(user=>res.json(user))
        .catch(err=>res.status(400).json('Error: '+err));        
});

/* GET Id */
router.route('/:id').get((req,res)=>{
     User.findById(req.params.id)
        .then(user=>res.json(user))
        .catch(err=>res.status(400).json('Error: '+err));
});

/* SignIn */
router.route('/signin').post((req,res)=>{
        const email = req.body.email;
        const password = req.body.password;

        User.findOne()
        .then(user=>{
                if(user.email===email){

                        let isMatch= bcrypt.compare(password, user.password);
                        if(isMatch){
                                res.json(user);   
                        }
                        /* .then((result) => {if(result){
                                res.json(user);
                        }}) */
                }              
        })
        .catch(err=>res.status(400).json('Error: '+err));
})

/* POST */
router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const avatar =req.body.avatar;
    const email =req.body.email;
    const password=req.body.password;

    const newUser=new User({name,avatar,password,email});

     newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err=>res.status(400).json('Error: '+err));
});

/* DELETE Id*/
router.route('/delete/:id').delete((req,res)=>{
     User.findByIdAndDelete(req.params.id)
        .then(()=>res.json('User deleted.'))
        .catch(err=>res.status(400).json('Error: '+err));
});

/* UPDATE Id*/
router.route('/update/:id').patch((req,res)=>{
     User.findByIdAndUpdate(req.params.id)
        .then(user=>{
            user.name=req.body.name;
            user.avatar=req.body.avatar;
            user.email=req.body.email;
            user.password=req.body.password;

            user.save()
                .then(()=>res.json('User updated!'))
                .catch(err=>res.status(400).json('Error: '+err));
        })
        .catch(err=>res.status(400).json('Error: '+err))
})

module.exports=router;