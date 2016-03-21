var gulp = require("gulp");
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");




gulp.task('haml', function () {
  gulp.src('./index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function() {
    gulp.src('./sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', function(){
  gulp.run('haml','styles');
});