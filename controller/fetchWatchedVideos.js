const WatchedVideos = require('../models/watchedVideos');
const Users=require('../models/users');

async function GetWatchedVideos(req, res, next) {
    try {
        const userDetails=req.constant;
        const user = await Users.query()
        .where(
            'users.id', userDetails.id
        )
        .withGraphJoined('watchedVideos');
    res.status(200).json({
        success: true,
        user
    });
        // const watchedVideos = await WatchedVideos.query()
        //     .where(
        //         'watchedVideos.userId', userDetails.id
        //     )
        //     .withGraphJoined('users.[watchedVideos.[videos]]');
        // res.status(200).json({
        //     success: true,
        //     watchedVideos
        // });

    } catch (error) {
        next(error);
    }
}

module.exports = exports = GetWatchedVideos;
