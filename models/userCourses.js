const Model = require('./index');

class UserCourses extends Model {
    static get tableName() {
        return 'userCourses';
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = UserCourses;