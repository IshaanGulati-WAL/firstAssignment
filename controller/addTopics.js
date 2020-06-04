require('dotenv').config();

const Topics = require('../models/topics');

async function addTopic(req, res, next) {
    let trx = null;
    try {
        
        const topic = await Topics.query(trx).insert({
            name: req.body.name,
            courseId: req.body.courseId
        }).returning('*');

        res.status(200).json({
            success: true,
            topic
        });
    } catch (error) {
        next(error);
    }
}

module.exports = exports = addTopic;
