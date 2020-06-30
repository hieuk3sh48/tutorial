const Users = require('../../models/users.model.js');

module.exports.get=async (req,res)=>{

    var users = await Users.find();
    res.json(users);
}
module.exports.post=async (req,res)=>{

    var user = await Users.collection.save(req.body);
    res.json(user);
}
module.exports.put=async (req,res)=>{

    var user = await Users.set(req.body).save();
    res.json(user);

}
module.exports.delete=async(req,res)=>{

    var user = await Users.deleteOne({"_id":req.params.id});
    res.json(user);
}