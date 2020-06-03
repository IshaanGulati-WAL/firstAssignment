
exports.up = function(knex,Promise) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id');
        t.dateTime('createdAt').notNullable();
        t.dateTime('updatedAt').notNullable()();
        t.string('password').notNullable();
        t.string('name').notNullable();
        t.string('email').notNullable();
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('users ');  
};
