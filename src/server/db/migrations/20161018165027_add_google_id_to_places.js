
exports.up = function(knex, Promise) {
  return knex.schema.table('places',(table) =>{
    table.string('google_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('places', (table) => {
    table.dropColumn('google_id');
  });
};
