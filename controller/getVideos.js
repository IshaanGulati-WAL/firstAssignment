

const Videos = require('../models/videos');

async function getVideos(req, res, next) {
    
    try {
        if (req.body.topicId) {
            const videos = await Videos.query().where({
                topicId:req.body.topicId
            }).select('*');
            res.status(200).json({
                success: true,
                videos
            });
        }
        else{
            const videos =await knex.select().table('videos');
            res.status(200).json({
                success: true,
                videos
            });
        }
        
    } catch (error) {
        next(error);
    }
}

module.exports = exports = getVideos;
