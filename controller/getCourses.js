
const jwt = require('jsonwebtoken');

const Courses = require('../models/courses');

async function getCourses(req, res, next) {

    try {
        let userId = req.constant;
        if (userId.id) {
            const course = await Courses.query().where({
                userId: userId.id
            }).returning('*');
            res.status(200).json({
                success: true,
                course
            });
        }
        else{
            const courses =await knex.select().table('courses');
            res.status(200).json({
                success: true,
                courses
            });
        }

    } catch (error) {
        next(error);
    }
}

module.exports = exports = getCourses;
