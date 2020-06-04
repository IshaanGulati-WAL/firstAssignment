const Model = require('./index');
const bcrypt = require('bcrypt');

class Users extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }


    async $beforeInsert() {
        if (this.password) {
            bcrypt.hash(this.password, process.env.SALT_ROUNDS, function(err, hash) {
                // Store hash in your password DB.
                this.password=hash
            });
            // this.password = bcrypt.hashSync(this.password, process.env.SALT_ROUNDS);
        }
    }
    static get relationMappings() {
        const Courses = require('./courses');
        const UserCourses = require('./userCourses');
        const WatchedVideos = require('./watchedVideos');
        const Videos = require('./videos');

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
            watchedVideos: {
                relation: Model.ManyToManyRelation,
                modelClass: Videos,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'watchedVideos.userId',
                        to: 'watchedVideos.videoId',
                    },
                    to: 'videos.id'
                }
            }
        };
    }
}

module.exports = Users;