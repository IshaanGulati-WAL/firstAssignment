const Model = require('./index');

class Users extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {
        const Courses=require('./courses');
        const UserCourses=require('./userCourses');
        const WatchedVideos=require('./watchedVideos');

        return {
            courses: {
                relation: Model.HasManyRelation,
                modelClass: Courses,
                join: {
                    from: 'users.id',
                    to: 'courses.userId'
                }
            },
            userCourses: {
                relation: Model.HasManyRelation,
                modelClass: UserCourses,
                join: {
                    from: 'users.id',
                    to: 'userCourses.userId'
                }
            },
            watchedVideos:{
                relation:Model.HasManyRelation,
                modelClass:WatchedVideos,
                join:{
                    from:'users.id',
                    to:'watchedVideos.userId'
                }
            }
        };
    }
}

module.exports = Users;