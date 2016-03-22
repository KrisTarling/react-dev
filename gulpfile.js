var gulp = require("gulp");
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");




gulp.task('haml', function () {
  gulp.src('./src/index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./client/'));
});

gulp.task('styles', function() {
    gulp.src('./src/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/'));
});

gulp.task('minify-css', function() {
  return gulp.src(['src/**/*.css', '!src/**/bootstrap.css'])
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./client/css'));
});

gulp.task('prefix', function () {
  return gulp.src('./src/style.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./src'));
});

gulp.task('default', function(){
  gulp.run('haml','styles','prefix','minify-css');
});