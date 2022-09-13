const jwt = require('jsonwebtoken');

exports.TokenVerification = (req, res, next)=>{
    try {
        console.log('Token = ' + req.headers.authorization);
    } catch (error) {
        console.log(error)
    }
}