dest = './public'
src = './src'

module.exports =
  browserSync:
    server: baseDir: [
      dest
    ]
    files: [ dest + '/**' ]
  markup:
    src: src + '/www/**'
    dest: dest
  browserify:
    debug: true
    bundleConfigs: [ {
      entries: [
        src + '/jsx/app.jsx'
      ]
      dest: dest + '/js'
      outputName: 'main.js'
    } ]
    extensions: [ '.jsx' ]
  sass:
    src: src + '/sass/**.scss'
    dest: dest + '/css'
    outputName: 'main.css'
    files: [
      src + '/sass/**/*.scss'
    ]
