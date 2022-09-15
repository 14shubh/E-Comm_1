const express = require('express');
const router = express();
const multer = require('multer');
const categoryController = require('../controller/categoryController');

const upload = multer({
    storage:multer.diskStorage({}),
    fileFilter: (req, file, cb)=>{
        cb(null, true)
    }
})

router.post('/add-category',upload.single('CategoryImage'),categoryController.addCategory);


module.exports = router;