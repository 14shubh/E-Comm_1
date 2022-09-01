const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://root:root@cluster1.9ogngut.mongodb.net/E-Comm_1?retryWrites=true&w=majority").then(()=>{
    console.log("Connection Esstablished with database");
}).catch(err=>{
    console.log(err);
    console.log("Somthing went wrong");
})

module.exports = mongoose.connection;