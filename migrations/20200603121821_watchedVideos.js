
exports.up = function(knex,Promise) {
    return knex.schema.createTable('watchedVideos', function(t) {
        t.increments('id');
        t.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
        t.dateTime('updatedAt').nullable().defaultTo(knex.fn.now());
        t.integer('videoId').notNullable();
        t.foreign('videoId').references('id').inTable('videos');
        t.integer('userId').notNullable();
        t.foreign('userId').references('id').inTable('users');
        t.timestamp('watchedAt');
        t.boolean('isWatched');         
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('watchedVideos');  
};
