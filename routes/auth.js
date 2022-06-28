const express = require('express');
const router=express.Router();
const {loginService, registerService} = require('../service/auth');


router.post('/login', loginService)


router.post('/register', registerService)


module.exports = router