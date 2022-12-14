const jwt = require('jsonwebtoken');
const User = require('../model/userModel');


exports.SignUp = (req, res, next)=>{
    let user = new User();
    console.log(req.body);
    user.name = req.body.name;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    user.gender = req.body.gender;
    user.password = req.body.password;
    user.save().then((data)=>{
        console.log(data);
        return res.status(201).json({message:"success",result:data});
    }).catch((err)=>{
        console.log(err);
        return res.status(501).json({error:err,error:"Something went wrong"});
    });
}

exports.SignIn = (req, res, next)=>{
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({email:email,password:password}).then((data)=>{
        console.log(data);
        let payload = {subject:data._id};
        let token = jwt.sign(payload,'djhkfhzkdhfiufjkbjdc');
        return res.status(201).json({result:data,token:token, message:"Success"});
    }).catch((err)=>{
        console.log(err);
        return res.status(501).json({result:err,message:"Something went wrong"});
    });
}