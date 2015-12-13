gulp = require('gulp')
config = require('../config').browserSync
browserSync = require('browser-sync')

gulp.task 'browserSync', () ->
  browserSync config
  gulp.watch config.srcJsFiles, ['jsBuildDev']
  gulp.watch config.srcCssFiles, ['cssBuildDev']
  gulp.watch config.destFiles, browserSync.reload
