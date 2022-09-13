// const database = require('../config/database_connection');
const mongoose = require('mongoose');
const adminModel = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('admins',adminModel);