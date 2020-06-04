
const jwt = require('jsonwebtoken');

const Courses = require('../models/courses');

async function getCourses(req, res, next) {
    let trx = null;
    try {
        let userId = req.token;
        if (userId.id) {
            const course = await Courses.query(trx).where({
                name: req.body.name,
                userId: userId.id
            }).returning('*');
            res.status(200).json({
                success: true,
                course
            });
        }
        else{
            // knex.select().table('courses')
            const courses =await knex.select().table('courses');
            res.status(200).json({
                success: true,
                courses
            });
        }
        res.status(200).json({
            success: true,

        });
    } catch (error) {
        next(error);
    }
}

module.exports = exports = getCourses;
