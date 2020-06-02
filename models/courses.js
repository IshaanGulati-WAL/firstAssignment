const Model = require('./index');

class Courses extends Model {
    static get tableName() {
        return 'courses';
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {
        const Topics = require('./topics');
        const UserCourses = require('./userCourses');

        return {
            userCourses: {
                relation: Model.HasManyRelation,
                modelClass: UserCourses,
                join: {
                    from: 'courses.id',
                    to: 'userCourses.courseId'
                }
            },
            topics: {
                relation: Model.HasManyRelation,
                modelClass: Topics,
                join: {
                    from: 'courses.id',
                    to: 'userCourses.courseId'
                }
            },
        };
    }
}

module.exports = Courses;