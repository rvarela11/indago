
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('plans',(table)=>{
    table.increments();
    table.integer('user_id').defaultTo(1).notNullable();
    table.integer('plan_type_id').defaultTo(1).notNullable();
    table.date('date');
    table.boolean('is_favorite').defaultTo(false).notNullable();
    table.integer('score').defaultTo(0).notNullable();
    table.string('name').defaultTo('').notNullable();
    table.string('address').defaultTo('').notNullable();
    table.string('city').defaultTo('').notNullable();
    table.string('state',2).defaultTo('').notNullable();
    table.string('zipcode',5).defaultTo('').notNullable();
    table.integer('coordinate_x');
    table.integer('coordinate_y');
    table.integer('version').defaultTo(1).notNullable();
    table.boolean('is_enable').defaultTo(true).notNullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('plans');
};
