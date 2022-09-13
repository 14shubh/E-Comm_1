const express = require('express');
const router = express();
const adminController = require('../controller/adminController');

router.post('/signin',adminController.Signin);
router.post('/signup',adminController.Signup);

module.exports = router;