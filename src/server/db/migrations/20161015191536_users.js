
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users',(table)=>{
    table.increments();
    table.string('first_name',35).defaultTo('');
    table.string('last_name',35).defaultTo('');
    table.string('username',20).unique();
    table.string('email').unique();
    table.specificType('password','char(60)').defaultTo('');
    table.integer('user_type_id').notNullable().defaultTo(1);
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
