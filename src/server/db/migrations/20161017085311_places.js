exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('places', (table) => {
    table.increments();
    table.integer('plan_id').defaultTo(1).notNullable();
    table.integer('plan_type_id').defaultTo(1).notNullable();
    table.boolean('is_favorite').defaultTo(false).notNullable();
    table.string('name').defaultTo('').notNullable();
    table.string('address').defaultTo('').notNullable();
    table.string('city').defaultTo('').notNullable();
    table.string('state').defaultTo('').notNullable();
    table.string('zipcode').defaultTo('').notNullable();
    table.time('start_time').nullable();
    table.time('end_time').nullable();
    table.integer('coordinate_x').nullable();
    table.integer('coordinate_y').nullable();
    table.integer('version').defaultTo(1).notNullable();
    table.integer('plan_version').defaultTo(1).notNullable();
    table.boolean('is_enable').defaultTo(true).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('places');
};
