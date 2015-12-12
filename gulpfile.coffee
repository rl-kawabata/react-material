gulp = require('gulp')
react = require('gulp-react')
using = require('gulp-using')
plumber = require('gulp-plumber')

gulp.task 'react', ->
  gulp.src('./src/jsx/**/*.jsx')
      .pipe(plumber())
      .pipe(using())
      .pipe(react())
      .pipe gulp.dest('./public/js/')

gulp.task 'watch', [], ->
  gulp.watch [ './src/jsx/**/*.jsx' ], [ 'react' ]
  return
