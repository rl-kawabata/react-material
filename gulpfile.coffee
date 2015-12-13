gulp = require('gulp')
using = require('gulp-using')
plumber = require('gulp-plumber')
browserify = require('browserify')
babelify = require('babelify')
reactify = require('reactify')
source = require('vinyl-source-stream')
buffer = require('vinyl-buffer')
uglify = require('gulp-uglify')

# ビルド対象ソース
TARGET_FILES = [
  './src/jsx/app.jsx'
]

gulp.task 'browserify',  ->
  # Browserifyビルド設定
  browserify({
    entries: TARGET_FILES,
    transform: [reactify],
    debug: true,
    cache: {},
    packageCache: {}
  })
  .bundle()
  .on "error", (err) -> console.log("Error : " + err.message)
  .pipe source('main.js')
  .pipe buffer()
  .pipe uglify()
  .pipe gulp.dest('./public/js/')
  return

gulp.task 'watch', ->
  gulp.watch [ './src/jsx/**/*.jsx' ], [ 'browserify' ]
  return
