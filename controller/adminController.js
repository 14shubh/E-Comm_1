const jwt = require('jsonwebtoken');
const Admin = require('../model/adminModel');

exports.Signup = (req, res, next)=>{
    console.log(req.body);
    Admin.create(req.body).then((result) => {
        console.log(result);
        return res.status(201).json({result:result, message:'success'});
    }).catch((err) => {
        console.log(err);
        res.status(501).json({message:'Something went wrong'});
    });
}

exports.Signin = (req, res, next)=>{
    // let admin = new Admin();
    let email = req.body.email;
    let password = req.body.password;
    Admin.findOne({email:email,password:password}).then((result) => {
        console.log(result);
        let payload = {subject: result._id};
        let token = jwt.sign(payload, 'rghgbjngdnnebjnbk');
        return res.status(201).json({result:result, token:token, message:"success"});
    }).catch((err) => {
        console.log(err);
        return res.status(501).json({message:'Something went wrong'});
    });
}