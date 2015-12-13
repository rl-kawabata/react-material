notify = require('gulp-notify')

module.exports = ->
  args = Array::slice.call(arguments)
  notify.onError(
    title: 'Compile Error'
    message: '<%= error.message %>').apply this, args
  @emit 'end'
  return
