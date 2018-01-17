const gulp = require('gulp');
const sass = require('gulp-sass');
const purify = require('gulp-purify-css');
const cleanCSS = require('gulp-clean-css');
var webpack = require('webpack-stream');


function html() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
};

function assets() {
  return gulp.src(['src/*.png', 'src/*.jpg', 'src/*.svg'])
    .pipe(gulp.dest('dist/'))
}

function sassy() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(purify(['dist/bundle.js', 'src/*.html']))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/'));
};

function webpk() {
  return gulp.src('src/js/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
};

gulp.task('build', gulp.series(html, assets, webpk, sassy));

gulp.watch(['src/*.html', 'src/scss/style.scss', 'src/js/main.js'], gulp.series(html, assets, webpk, sassy));
