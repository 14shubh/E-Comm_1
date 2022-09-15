const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    categoryName : {
        type: String,
        required: true,
        unique: true
    },
    CategoryImage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('categories',CategorySchema);