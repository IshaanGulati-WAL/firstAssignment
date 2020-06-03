
exports.up = function(knex,Promise) {
    return knex.schema.createTable('videos', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNullable();
        t.dateTime('updatedAt').nullable();
        t.string('link').notNullable();
        t.integer('topicId').notNullable();   
        t.foreign('topicId').references('id').inTable('topics');      
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('videos');  
};
