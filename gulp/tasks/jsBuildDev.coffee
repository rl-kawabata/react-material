gulp = require('gulp')
browserify = require('browserify')
bundleLogger = require('../util/bundleLogger')
handleErrors = require('../util/handleErrors')
source = require('vinyl-source-stream')
buffer = require('vinyl-buffer')
config = require('../config').jsBuild
babelify = require('babelify')

gulp.task 'jsBuildDev', (callback) ->
  # ビルド用キュー
  bundleQueue = config.bundleConfigs.length

  # Browswerオブジェクト
  browserifyThis = (bundleConfig) ->
    bundler = browserify(
      cache: {}
      packageCache: {}
      fullPaths: false
      entries: bundleConfig.entries
      extensions: config.extensions
      debug: config.debug)

    # ビルド実行
    bundle = ->
      bundleLogger.start bundleConfig.outputName
      bundler.bundle()
             .on 'error', handleErrors
             .pipe source(bundleConfig.outputName)
             .pipe buffer()
             .pipe gulp.dest(bundleConfig.dest)
             .on 'end', reportFinished

    # Babel通す
    bundler.transform babelify.configure(stage: 1)

    # 終了後ログ
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
