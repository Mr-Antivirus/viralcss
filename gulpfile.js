/*!
 * Copyright 2016, Dennis Norton.
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const gulp = require('gulp');
const chmod = require('gulp-chmod');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();

const sassOptions = {
    outputStyle: 'nested'
};

const chmodOptions = {
    owner: {
        read: true,
        write: true,
        execute: true
    },
    group: {
        execute: true
    },
    others: {
        execute: true
    }
};

var gulp_src = gulp.src;
gulp.src = function () {
    return gulp_src.apply(gulp, arguments)
        .pipe(plumber(function (error) {
            // Output an error message
            gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
            // emit the end event, to properly end the task
            this.emit('end');
        }));
};

// Compile sass into css
gulp.task('sass', function () {
    return gulp.src('scss/viralcss.scss')
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(chmod(chmodOptions))
        .pipe(gulp.dest('dist/css'));
});

// Watch for scss file changes, then compile
gulp.task('sass:watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});

// serve everything from the dist folder
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './examples'
        }
    });
});

// Static Server + watching scss/html files
gulp.task('serve',  function () {
    browserSync.init({
        server: ['examples', 'dist']
    });

    //gulp.watch("scss/**/*.scss", ['sass:inject']);
    gulp.watch("examples/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass:inject', function () {
    return gulp.src("scss/**/*.scss")
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(chmod(chmodOptions))
        .pipe(gulp.dest("examples/css/*"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);