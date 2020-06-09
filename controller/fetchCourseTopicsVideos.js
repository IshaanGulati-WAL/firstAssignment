const Courses = require('../models/courses');

async function fetchCourse(req, res, next) {
    try {
        const course = await Courses.query()
            .where(
                'courses.id', req.body.courseId
            )
            .withGraphJoined('topics.[videos]');

        res.status(200).json({
            success: true,
            course
        });

    } catch (error) {
        next(error);
    }
}

module.exports = exports = fetchCourse;
