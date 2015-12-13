gulp = require('gulp')
using = require('gulp-using')
plumber = require('gulp-plumber')
sass = require('gulp-sass')
concat = require("gulp-concat")
config = require('../config').sass
bundleLogger = require('../util/bundleLogger')
handleErrors = require('../util/handleErrors')

gulp.task 'sass', ->

  build = ->
    bundleLogger.start config.outputName
    gulp.src config.files
        .on 'error', handleErrors
        .pipe plumber()
        .pipe using()
        .pipe sass()
        .pipe concat(config.outputName)
        .pipe gulp.dest(config.dest)
        .on 'end', reportFinished

  # 終了後ログ
  reportFinished = ->
    bundleLogger.end config.outputName

  build()
  return
