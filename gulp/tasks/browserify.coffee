gulp = require('gulp')
browserify = require('browserify')
watchify = require('watchify')
bundleLogger = require('../util/bundleLogger')
handleErrors = require('../util/handleErrors')
source = require('vinyl-source-stream')
buffer = require('vinyl-buffer')
config = require('../config').browserify
babelify = require('babelify')

gulp.task 'browserify', (callback) ->
  bundleQueue = config.bundleConfigs.length

  browserifyThis = (bundleConfig) ->
    bundler = browserify(
      cache: {}
      packageCache: {}
      fullPaths: false
      entries: bundleConfig.entries
      extensions: config.extensions
      debug: config.debug)

    bundle = ->
      bundleLogger.start bundleConfig.outputName
      bundler.bundle()
             .on('error', handleErrors)
             .pipe(source(bundleConfig.outputName))
             .pipe buffer()
             .pipe(gulp.dest(bundleConfig.dest))
             .on 'end', reportFinished

    bundler.transform babelify.configure(stage: 1)
    if global.isWatching
      bundler = watchify(bundler)
      bundler.on 'update', bundle

    reportFinished = ->
      bundleLogger.end bundleConfig.outputName
      if bundleQueue
        bundleQueue--
        if bundleQueue == 0
          callback()
      return

    bundle()

  config.bundleConfigs.forEach browserifyThis
  return
