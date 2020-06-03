
exports.up = function(knex,Promise) {
    return knex.schema.createTable('videos', function(t) {
        t.increments('id');
        t.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
        t.dateTime('updatedAt').nullable().defaultTo(knex.fn.now());
        t.string('link').notNullable();
        t.integer('topicId').notNullable();   
        t.foreign('topicId').references('id').inTable('topics');      
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('videos');  
};
