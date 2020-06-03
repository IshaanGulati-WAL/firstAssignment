const Model = require('./index');

class Videos extends Model {
    static get tableName() {
        return 'videos';
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {
        const WatchedVideos = require('./watchedVideos');

        return {
            watchedVideos: {
                relation: Model.ManyToManyRelation,
                modelClass: WatchedVideos,
                join: {
                    from: 'videos.id',
                    to: 'watchedVideos.videoId'
                }
            },
        };
    }
}

module.exports = User;