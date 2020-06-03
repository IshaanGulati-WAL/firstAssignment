
exports.up = function(knex,Promise) {
    return knex.schema.createTable('topics', function(t) {
        t.increments('id');
        t.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
        t.dateTime('updatedAt').nullable().defaultTo(knex.fn.now());
        t.string('name').notNullable();
        t.integer('courseId').notNullable();  
        t.foreign('courseId').references('id').inTable('courses');       
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('topics');  
};
