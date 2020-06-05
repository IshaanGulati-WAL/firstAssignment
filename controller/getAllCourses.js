const Courses = require('../models/courses');

async function getAllCourses(req, res, next) {
    try {
        const courses = await Courses.query();
        
        res.status(200).json({
            success: true,
            courses
        });

    } catch (error) {
        next(error);
    }
}

module.exports = exports = getAllCourses;
