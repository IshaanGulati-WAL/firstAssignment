const Topics = require('../models/topics');

async function getTopics(req, res, next) {
    
    try {
        if (req.body.courseId) {
            const topics = await Topics.query().where({
                courseId:req.body.courseId
            }).select('*');
            res.status(200).json({
                success: true,
                topics
            });
        }
        else{
            const topics =await knex.select().table('topics');
            res.status(200).json({
                success: true,
                topics
            });
        }
        
    } catch (error) {
        next(error);
    }
}

module.exports = exports = getTopics;
