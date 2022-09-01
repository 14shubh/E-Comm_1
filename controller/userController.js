
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
        return res.status(201).json({result:data,message:"Sign Up success"});
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
        return res.status(201).json({result:data, message:"Sign In Success"});
    }).catch((err)=>{
        console.log(err);
        return res.status(501).json({result:err,message:"Something went wrong"});
    });
}