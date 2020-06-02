
exports.up = function(knex,Promise) {
    return knex.schema.createTable('courses', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.string('name').notNull();
        t.integer('userId').notNull();
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('courses');  
};
