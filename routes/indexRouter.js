const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');
router.post('signin',indexController.SignIn);


module.exports = router;