
exports.up = function(knex,Promise) {
    return knex.schema.createTable('userCourses', function(t) {
        t.increments('id');
        t.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
        t.dateTime('updatedAt').nullable().defaultTo(knex.fn.now());
        t.integer('courseId').notNullable();
        t.foreign('courseId').references('id').inTable('courses');
        t.integer('userId').notNullable();
        t.foreign('userId').references('id').inTable('users');
        t.boolean('completed').defaultTo(false);         
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('userCourses');  
};
