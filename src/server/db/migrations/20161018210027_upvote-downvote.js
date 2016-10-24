
exports.up = function(knex, Promise) {
  return knex.schema.table('plans', (table)=>{
    table.integer('upvote').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('plans', (table)=>{
    table.dropColumn('upvote');
  });
};
