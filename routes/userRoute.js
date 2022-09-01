const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/signup',userController.SignUp);
router.post('/signin',userController.SignIn);


module.exports = router;