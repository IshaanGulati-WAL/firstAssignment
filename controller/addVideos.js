
const Videos = require('../models/videos');

async function addVideo(req, res, next) {
 
    try {
        
        const video = await Videos.query().insert({
            link: req.body.link,
            topicId: req.body.topicId
        }).returning('*');

        res.status(200).json({
            success: true,
            video
        });
    } catch (error) {
        next(error);
    }
}

module.exports = exports = addVideo;
