const Model = require('./index');

class Topics extends Model {
    static get tableName() {
        return 'topics';
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {
        const Videos = require('./videos');

        return {
            videos: {
                relation: Model.HasManyRelation,
                modelClass: Videos,
                join: {
                    from: 'topics.id',
                    to: 'videos.topicId'
                }
            },
        };
    }
}

module.exports = Topics;