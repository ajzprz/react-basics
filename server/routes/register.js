const express = require('express');
const { createNewUser, addNewUser } = require('../controllers/register');
// const {users} = require('../data');
const { validate } = require('../middleware/auth');
const router = new express.Router();

router.post('/',validate, createNewUser)

router.put('/', addNewUser)

module.exports = router;