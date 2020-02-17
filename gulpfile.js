// browser-sync watched files
// automatically reloads the page when files changed
var browserSyncWatchFiles = [
  './assets/css/*.css',
  './assets/js/*.js',
  './libraries/**/*.php',
  './modules/**/*.php',
  './partials/**/*.php',
  './setup/**/*.php',
  './*.php',
];

// browser-sync options
// see: https://www.browsersync.io/docs/options/
var browserSyncOptions = {
  proxy: "http://porto.local/",
  host: "porto.local",
  open: "external",
  notify: false
};

// Defining requirements
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

/* ================= WATCHER ================== */
gulp.task('bs', function () {
  browserSync.init(browserSyncWatchFiles, browserSyncOptions);
});

var sass = require('gulp-sass');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./assets/css/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watchSass', function () {
  gulp.watch('./assets/css/sass/**/*.scss', gulp.series(['sass']));
});

const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js')
var webpackDevConfig = { ...webpackConfig, mode: 'development', watch: true }

gulp.task('webpack', function () {
  return gulp.src('./react/index.js')
    .pipe(gulpWebpack(webpackDevConfig, webpack))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('default', gulp.parallel(['watchSass', 'webpack', 'bs']))