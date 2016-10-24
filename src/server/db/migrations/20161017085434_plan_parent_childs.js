
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('place_parent_child',(table)=>{
    table.increments();
    table.integer('origin_id').notNullable();
    table.integer('parent_id').notNullable();
    table.integer('child_id').notNullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('place_parent_child');
};
