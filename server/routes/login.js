const express = require('express');
const welcomeUser = require('../controllers/login');
const {authorize} = require('../middleware/auth');
const router = new express.Router();

router.post("/",authorize,welcomeUser)

module.exports = router;