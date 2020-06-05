const Videos = require('../models/videos');
const Topics=require('../models/topics');

async function getVideos(req, res, next) {
    try {
        if (req.params.topicId&&req.params.courseId) {
            const verify=await Topics.query().where({
                id:req.params.topicId,
                courseId:req.params.courseId
            });


            if(verify.length==0){
                res.status(403).json({
                    success:false,
                    message:"this topic doesnt belong to the entered course "
                })
            }
            else{
                const videos = await Videos.query().where({
                    topicId:req.params.topicId
                }).select('*');
                res.status(200).json({
                    success: true,
                    videos
                });
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = exports = getVideos;
