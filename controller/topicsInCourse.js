const Topics = require('../models/topics');

async function getTopicsInACourse(req, res, next) {
    try {
        if (req.params.courseId) {
            const topics = await Topics.query().where({
                courseId: req.params.courseId
            }).select('*');
            res.status(200).json({
                success: true,
                topics
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = exports = getTopicsInACourse;
