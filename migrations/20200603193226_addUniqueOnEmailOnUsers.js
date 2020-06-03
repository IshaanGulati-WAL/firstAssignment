
exports.up = function(knex) {
  return knex.schema.alterTable('users',function (t){
      t.unique('email');
  });
};

exports.down = function(knex) {
    return knex.schema.alterTable('users',function (t){
        t.dropUnique('email');
    });
};
