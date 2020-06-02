
exports.up = function(knex,Promise) {
    return knex.schema.createTable('userCourses', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.integer('courseId').notNull();
        t.integer('userId').notNull();
        t.boolean('completed');         
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('userCourses');  
};
