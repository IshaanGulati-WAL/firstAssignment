
exports.up = function(knex,Promise) {
    return knex.schema.createTable('courses', function(t) {
        t.increments('id');
        t.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
        t.dateTime('updatedAt').nullable().defaultTo(knex.fn.now());
        t.string('name').notNullable();
        t.integer('userId').notNullable();
        t.foreign('userId').references('id').inTable('users');
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('courses');  
};
