const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const verifyToken = require('../middleware/authenticate_token');

router.post('/signup',userController.SignUp);
router.post('/signin',userController.SignIn);


module.exports = router;