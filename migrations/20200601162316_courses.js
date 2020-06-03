
exports.up = function(knex,Promise) {
    return knex.schema.createTable('courses', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNullable();
        t.dateTime('updatedAt').nullable();
        t.string('name').notNullable();
        t.integer('userId').notNullable();
        t.foreign('userId').references('id').inTable('users');
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('courses');  
};
