// const {users} = require('../data');

const User = require("../models/Users")


const createNewUser = (req,res)=>{
     
    User.create({id:3, username : req.body.name, password:req.body.password})
    res.send("User added Successfully")
}

const addNewUser = (req,res)=>{
    res.send("user updated Successfully")
}

module.exports = {createNewUser, addNewUser};