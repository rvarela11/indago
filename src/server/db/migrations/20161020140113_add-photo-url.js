exports.up = function(knex, Promise) {
  return knex.schema.table('places', function(table) {
    table.string('photo_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('places', function(table) {
    table.dropColumn('photo_url');
  });
};
