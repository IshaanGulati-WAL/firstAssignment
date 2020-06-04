const express = require('express');
const router = express.Router();
const SignUp=require('../controller/signUp');
const SignIn=require('../controller/signIn');

router.use('/signUp',SignUp);
router.use('/signIn',SignIn);

module.exports = exports = router;
