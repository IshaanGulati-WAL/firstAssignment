
const jwt = require('jsonwebtoken');

const Courses = require('../models/courses');

async function addCourses(req, res, next) {
    let trx = null;
    try {
        console.log("entered add courses");
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
