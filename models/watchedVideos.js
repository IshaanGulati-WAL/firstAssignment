const Model = require('./index');

class WatchedVideos extends Model {
    static get tableName() {
        return 'watchedVideos';
    }

    static get idColumn() {
        return 'id';
    }

    // static get relationMappings() {
    //     const Users=require('./users');
    //     const Videos=require('./videos');

    //     return {
    //         users: {
    //             relation: Model.HasOneRelation,
    //             modelClass: Users,
    //             join: {
    //                 from: 'users.id',
    //                 to: 'watchedVideos.userId'
    //             }
    //         },
    //         videos: {
    //             relation: Model.HasOneRelation,
    //             modelClass: Videos,
    //             join: {
    //                 from: 'videos.id',
    //                 to: 'watchedVideos.videoId'
    //             }
    //         }
    //     };
    // }
}

module.exports = WatchedVideos;