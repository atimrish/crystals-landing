'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanHtml = require('gulp-cleanhtml')

function buildCss() {
    return gulp.src('./src/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
}

function clearHtml() {
    return gulp.src('./src/pages/**/*.html')
        .pipe(cleanHtml())
        .pipe(gulp.dest('./dist/pages/'))
}

function defaultTask(cb) {
    console.log('test task');
    cb();
}

function watchTask() {
    gulp.watch('./src/styles/**/*.scss', buildCss)
    gulp.watch('./src/pages/**/*.html', clearHtml)
}

exports.default = defaultTask
exports.build = buildCss
exports.clearHtml = clearHtml
exports.watch = watchTask