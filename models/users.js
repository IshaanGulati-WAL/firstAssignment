const Model = require('./index');
const bcrypt = require('bcrypt');


class Users extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }

    async $beforeUpdate(){
        if (this.password) {
            const hashPassword = await bcrypt.hash(this.password, 10);
            this.password = hashPassword;
        }
    }
    
    async $beforeInsert() {
        if (this.password) {
            const hashPassword = await bcrypt.hash(this.password, 10);
            this.password = hashPassword;
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