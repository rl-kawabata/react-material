module.exports =
  browserSync:
    server:
      baseDir: "./public"
    destFiles: "./public/**"
    srcJsFiles: "./src/jsx/**"
    srcCssFiles: "./src/sass/**"
  jsBuild:
    files: [ './src/jsx/**/*.jsx' ]
    debug: true
    bundleConfigs: [ {
      entries: './src/jsx/app.jsx'
      dest: './public/js'
      outputName: 'main.js'
    } ]
    extensions: [ '.jsx' ]
  cssBuild:
    files: [ './src/sass/**/*.scss' ]
    dest: './public/css'
    outputName: 'main.css'
