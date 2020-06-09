const Courses = require('../models/courses');
const UserCourses=require('../models/userCourses');

async function subscribeCourses(req, res, next) {
    try {
        let tokenData = req.constant;

        const course=await Courses.query().findOne({
            id:req.body.courseId
        })
        if(course.userId==tokenData.id){
            res.status(403).json({
                success: false,
                message:"cannot subscribe to the courses you've created"
            });
            return;    
        }
        else{
            const userCourse = await UserCourses.query().insert({
                courseId: req.body.courseId,
                userId: tokenData.id
            }).returning('*');
    
            res.status(200).json({
                success: true,
                userCourse
            });
        }

    } catch (error) {
        next(error);
    }
}

module.exports = exports = subscribeCourses;
