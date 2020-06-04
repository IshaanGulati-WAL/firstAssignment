
const jwt = require('jsonwebtoken');

const Courses = require('../models/courses');

async function addCourses(req, res, next) {
    let trx = null;
    try {
        // let tokenData = jwt.verify(req.headers['token'], process.env.JWT_SECRET_TOKEN);
        let tokenData = req.token;
        const course = await Courses.query(trx).insert({
            name: req.body.name,
            userId: tokenData.id
        }).returning('*');

        res.status(200).json({
            success: true,
            course
        });
    } catch (error) {
        next(error);
    }
}

module.exports = exports = addCourses;
