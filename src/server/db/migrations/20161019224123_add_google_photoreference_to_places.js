
exports.up = function(knex, Promise) {
  return knex.schema.table('places', function(table) {
    table.string('google_photo_ref');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('places', function(table) {
    table.dropColumn('google_photo_ref');
  });
};
