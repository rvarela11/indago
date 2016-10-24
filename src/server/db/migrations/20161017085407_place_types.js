
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('place_type',(table)=>{
    table.increments();
    table.string('type').defaultTo('').notNullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('place_type');
};
