
exports.up = function(knex,Promise) {
    return knex.schema.createTable('topics', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.string('name').notNull();
        t.integer('courseId').notNull();  
        t.foreign('courseId').references('id').inTable('courses');       
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('topics');  
};
