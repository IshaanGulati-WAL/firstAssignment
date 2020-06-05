const express = require('express');
const router = express.Router();
const SignUp=require('../controller/signUp');
const SignIn=require('../controller/signIn');
const AddCourse=require('../controller/addCourses');
const GetCourse=require('../controller/getCourses');
const AddTopic=require('../controller/addTopics');
const GetTopic=require('../controller/getTopics');
const AddVideo=require('../controller/addVideos');
const GetVideo=require('../controller/getVideos');
const SubscribeCourse=require('../controller/subscribeCourse');
const GetAllCourses=require('../controller/getAllCourses');
const TopicsInCourse=require('../controller/topicsInCourse');
const VideosInTopic=require('../controller/videosInTopic');

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

router.use('/addVideo',AddVideo);
router.use('/getVideo',GetVideo);

router.use('/subscribeCourse',JwtDecode,SubscribeCourse);

router.use('/courses',GetAllCourses);
router.use('/topicsInCourse/:courseId',TopicsInCourse);
router.use('/videosInTopic/:courseId/:topicId',VideosInTopic);

module.exports = exports = router;
