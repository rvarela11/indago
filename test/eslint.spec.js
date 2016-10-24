process.env.NODE_ENV = process.env.NODE_ENV || 'test';

const lint = require('mocha-eslint');
const options = require('../.eslintrc');
const paths = [
  'test/*.js',
  'test/**/*.js',
  'src/**/*.js',
  // 'src/**/*.ejs',
  'src/**/*.html',
  'src/**/*.htm'
];

// Run the tests
// lint(paths, options);
