const express = require('express');
const router = express.Router();
const SignUp=require('../controller/signUp');
const SignIn=require('../controller/signIn');
const AddCourse=require('../controller/addCourses');
const GetCourse=require('../controller/getCourses');
const AddTopic=require('../controller/addTopics');
const GetTopic=require('../controller/getTopics');

//jwt Verify Middleware
const JwtDecode=require('../controller/jwtDecode');

//validations Middleware
const SignUpValidator=require('../validations/signUpValidator');
const SignInValidator=require('../validations/signInValidator');
const AddCourseValidator=require('../validations/addCoursesValidator');
const AddTopicValidator=require('../validations/addTopicsValidator');

router.use('/signUp',SignUpValidator,SignUp);
router.use('/signIn',SignInValidator,SignIn);

router.use('/addTopic',AddTopicValidator,AddTopic);
router.use('/getTopic',GetTopic);

router.use('/addCourse',JwtDecode,AddCourseValidator,AddCourse);
router.use('/getCourse',JwtDecode,GetCourse);


module.exports = exports = router;
