const express = require('express');
const router = express.Router();
const SignUp=require('../controller/signUp');
const SignIn=require('../controller/signIn');
const AddCourse=require('../controller/addCourses');
const GetCourse=require('../controller/getCourses');
const AddTopic=require('../controller/addTopics');
const GetTopic=require('../controller/getTopics');

router.use('/signUp',SignUp);
router.use('/signIn',SignIn);

router.use('/addTopic',AddTopic);
router.use('/getTopic',GetTopic);

router.use('/addCourse',AddCourse);
router.use('/getCourse',GetCourse);


module.exports = exports = router;
