const WatchedVideos = require('../models/watchedVideos');

async function addWatchedVideo(req, res, next) {
    try {
        const userDetails=req.constant;
        const watchedVideo = await WatchedVideos.query().insert({
            videoId: req.body.videoId,
            userId: userDetails.id,
            watchedAt:req.body.watchedAt
        }).returning('*');

        res.status(200).json({
            success: true,
            watchedVideo
        });
    } catch (error) {
        next(error);
    }
}

module.exports = exports = addWatchedVideo;
