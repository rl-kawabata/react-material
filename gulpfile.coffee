gulp = require('gulp')
using = require('gulp-using')
plumber = require('gulp-plumber')
sass = require('gulp-sass')
browserify = require('browserify')
babelify = require('babelify')
reactify = require('reactify')
source = require('vinyl-source-stream')
buffer = require('vinyl-buffer')
concat = require("gulp-concat")
uglify = require('gulp-uglify')
minify = require('gulp-minify')

# JSビルド対象ソース
TARGET_JSX_FILES = [
  './src/jsx/app.jsx'
]
# CSSビルド対象ソース
TARGET_CSS_FILES = [
  './src/sass/**/*.scss'
]
# Browserify設定
build = browserify({
  entries: TARGET_JSX_FILES,
  transform: [reactify],
  debug: true,
  cache: {},
  packageCache: {}
})

gulp.task 'js-dev',  ->
  build.bundle()
  .on "error", (err) -> console.log("Error : " + err.message)
  .pipe source('main.js')
  .pipe buffer()
  .pipe gulp.dest('./public/js/')
  return

gulp.task 'js-pro',  ->
  build.bundle()
  .on "error", (err) -> console.log("Error : " + err.message)
  .pipe source('main.js')
  .pipe buffer()
  .pipe uglify()
  .pipe gulp.dest('./public/js/')
  return

gulp.task 'css-dev', ->
  gulp.src TARGET_CSS_FILES
  .pipe plumber()
  .pipe using()
  .pipe sass()
  .pipe concat('main.css')
  .pipe gulp.dest('./public/css/')
  return

gulp.task 'css-pro', ->
  gulp.src TARGET_CSS_FILES
  .pipe plumber()
  .pipe using()
  .pipe sass()
  .pipe concat('main.css')
  .pipe gulp.dest('./public/css/')
  return

gulp.task 'dev-init', ['js-dev', 'css-dev']

gulp.task 'watch', ->
  gulp.watch [ './src/jsx/**/*.jsx' ], [ 'js-dev' ]
  gulp.watch [ './src/jsx/**/*.sass' ], [ 'css-dev' ]
  return
