gulp = require('gulp')
config = require('../config')
browserSync = require('browser-sync')

gulp.task 'watch', ['setWatch', 'browserSync'], ->
  gulp.watch config.markup.src, [ 'markup' ]
  gulp.watch config.sass.src, [ 'sass', 'browserReload' ]
  return
