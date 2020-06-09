
const jwt = require('jsonwebtoken');

const Courses = require('../models/courses');

async function addCourses(req, res, next) {
    try {
        console.log("entered add courses");
        let tokenData = req.constant;
        const course = await Courses.query().insert({
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
