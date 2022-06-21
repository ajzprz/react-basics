const User = require("../models/Users")

// const {users} = require('../data');


const validate = (req,res,next) =>{
    if(req.body.name ==='' || req.body.password ===''){
     res.status(401).send("Value cannot be empty")
     }
     else{
     next()
     }
 }
 
const authorize = (req,res,next) =>{
    let user =  User.find((user)=>user.username === req.body.name && 
    user.password === req.body.password)
    if (user) {
         next()
     }
    else{
        res.status(401).send("Unauthorized access")
    }
 }

 module.exports = {validate, authorize};