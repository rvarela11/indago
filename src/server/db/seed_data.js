const bcrypt = require('bcrypt-nodejs');

const password_hash = bcrypt.hashSync('password');

const data = {
  users: [{
    first_name: 'diego',
    last_name: 'diego',
    username: 'diego',
    email: 'diego',
    password: password_hash
  }, {
    first_name: 'margo',
    last_name: 'margo',
    username: 'margo',
    email: 'margo',
    password: password_hash
  }, ],
  plans: [{
    user_id: 1,
    city: 'Austin',
    name: 'Music Days!',
    date:'2017-07-08'
  }, {
    user_id: 2,
    city: 'San Francisco',
    name: 'Coffee House Crawl',
    is_favorite: true
  }, {
    user_id: 1,
    city: 'New York',
    name: 'Bar Hopping'
  }, {
    user_id: 1,
    city: 'Seattle',
    name: 'Music Day!',
    is_favorite: true
  }, {
    user_id: 1,
    city: 'Miami',
    name: 'Bar Hopping'
  }, {
    user_id: 1,
    city: 'Chicago',
    name: 'Coffee House Crawl'
  }, {
    user_id: 1,
    name: 'Go Diego Go!',
    city: 'Austin',
    state: 'TX'
  }, {
    user_id: 1,
    name: 'Galvanize',
    city: 'Austin',
    state: 'TX'
  }, {
    user_id: 2,
    name: 'Lake Pflugerville',
    city: 'Pflugerville',
    state: 'TX'
  },

  ],
  places: [{
    plan_id: 1,
    start_time:'9:00 AM',
    name: 'Pinballz!',
    city: 'Austin',
    state: 'TX',
    photo_url: 'https://wwcdn.weddingwire.com/vendor/750001_755000/754857/thumbnails/800x800_1427470934503-pinballz-wall.jpg'
  }, {
    plan_id: 1,
    start_time:'10:00 AM',
    name: 'Galvanize',
    city: 'Austin',
    state: 'TX',
    is_favorite: true,
    photo_url: 'http://www.texastechpulse.com/images/logos/galvanizesign1.jpg'

  }, {
    plan_id: 1,
    start_time:'11:00 AM',
    name: 'Lake Pflugerville',
    city: 'Pflugerville',
    state: 'TX',
    is_favorite: true,
    photo_url: 'http://www.pflugervilletx.gov/images/pages/N824/Lake%20air%202.jpg'
  }]
};

module.exports = data;
