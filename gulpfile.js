// *** dependencies *** //

const path = require('path');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const runSequence = require('run-sequence');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const server = require('tiny-lr')();

// *** config *** //


const paths = {
  scripts: [
    path.join('src', '**', '*.js'),
    path.join('src', '*.js'),
    path.join('test', '**', '*.js'),
    path.join('test', '*.js')
  ],
  styles: [
    path.join('src', 'client', 'css', '*.css')
  ],
  views: [
    path.join('src', 'server', '**', '*.html'),
    path.join('src', 'server', '*.html')
  ],
  server: path.join('src', 'server', 'server.js')
};

const lrPort = 35729;

const nodemonConfig = {
  script: paths.server,
  ext: 'html js css',
  ignore: ['node_modules'],
  env: {
    NODE_ENV: 'development'
  }
};

// *** default task *** //

gulp.task('default', () => {
  runSequence(
    ['eslint'],
    ['lr'],
    ['nodemon'],
    ['watch']
  );
});

// *** sub tasks ** //
gulp.task('eslint', () => {
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(eslint('.eslintrc.json'))
    .pipe(eslint.format());
    // .pipe(eslint.format(friendlyFormatter))
    // .pipe(notify({
    //   message: 'eslint done'
    // }));
});


gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(plumber());
});

gulp.task('views', () => {
  return gulp.src(paths.views)
    .pipe(plumber());
});

gulp.task('lr', () => {
  server.listen(lrPort, (err) => {
    if (err) {
      return console.error(err);
    }
  });
});

gulp.task('nodemon', () => {
  return nodemon(nodemonConfig);
});

gulp.task('watch', () => {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.scripts, ['eslint']);
  gulp.watch(paths.styles, ['styles']);
});
