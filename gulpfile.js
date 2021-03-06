var gulp = require('gulp')
var babel = require('gulp-babel')
var sourcemaps = require('gulp-sourcemaps')
var path = require('path')
var main = path.basename(require('./package.json').main)

gulp.task('build', function () {
  return gulp.src([main, 'lib/*.js'])
    .pipe(sourcemaps.init())
      .pipe(babel())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist'))
})

gulp.task('test', function () {
  var mocha = require('gulp-mocha')

  return gulp.src('test/index.js', {read: false})
    .pipe(mocha({
      reporter: 'nyan'
    }))
})
