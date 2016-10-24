const Seed = require('../seed_data');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('users').del(),
    knex('plans').del(),
    knex('places').del(),
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
    knex.raw('ALTER SEQUENCE plans_id_seq RESTART WITH 1'),
    knex.raw('ALTER SEQUENCE places_id_seq RESTART WITH 1')
  ])
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert(Seed.users),
        knex('plans').insert(Seed.plans),
        knex('places').insert(Seed.places)
      ]);
    });
};
