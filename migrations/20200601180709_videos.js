
exports.up = function(knex,Promise) {
    return knex.schema.createTable('videos', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.string('link').notNull();
        t.integer('topicId').notNull();   
        t.foreign('topicId').references('id').inTable('topics');      
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('videos');  
};
