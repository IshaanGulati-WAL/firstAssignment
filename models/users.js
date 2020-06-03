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
        const Videos=require('./videos');

        return {
            courses: {
                relation: Model.ManyToManyRelation,
                modelClass: Courses,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'userCourses.userId',
                        to: 'userCourses.courseId',
                    },
                    to: 'courses.id'
                }
            },
            // userCourses: {
            //     relation: Model.HasManyRelation,
            //     modelClass: UserCourses,
            //     join: {
            //         from: 'users.id',
            //         to: 'userCourses.userId'
            //     }
            // },
            watchedVideos:{
                relation:Model.ManyToManyRelation,
                modelClass:Videos,
                join:{
                    from:'users.id',
                    through: {
                        from: 'watchedVideos.userId',
                        to: 'watchedVideos.videoId',
                    },
                    to:'videos.id'
                }
            }
        };
    }
}

module.exports = Users;