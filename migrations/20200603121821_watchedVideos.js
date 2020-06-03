
exports.up = function(knex,Promise) {
    return knex.schema.createTable('watchedVideos', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.integer('videoId').notNull();
        t.foreign('videoId').references('id').inTable('videos');
        t.integer('userId').notNull();
        t.foreign('userId').references('id').inTable('users');
        t.timestamp('watchedAt');
        t.boolean('isWatched');         
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('watchedVideos');  
};
