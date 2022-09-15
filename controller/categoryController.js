const Category = require('../model/categoryModel');
const cloudinary = require('cloudinary');

const dotenv = require('dotenv');
const { validationResult } = require('express-validator');

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


exports.addCategory = async(req, res, next)=>{
    let image = "";
    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
    }
    if(req.file){
        await cloudinary.v2.uploader.upload(req.file.path).then((result) => {
            console.log(result);
            image = result.secure_url;
        }).catch((err) => {
            console.log(err);
        });
    }
    console.log('================start===========');
    console.log(image);
    console.log('================end=============');
    const category = new Category();
    category.categoryName = req.body.CategoryName;
    category.CategoryImage = image;

    category.save().then((result) => {
        console.log(result);
        return res.status(201).json({message:"Success",result:result});
    }).catch((err) => {
        console.log(err);
        return res.status(501).json({message:"Something went wrong",
    error:err})
    });
}