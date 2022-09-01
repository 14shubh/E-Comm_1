const database = require('../config/database_connection');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    name : {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required:true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("users",UserSchema);