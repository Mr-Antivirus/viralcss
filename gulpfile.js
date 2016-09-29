/*!
 * Copyright 2016, Dennis Norton.
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const sassOptions = {
    outputStyle: 'nested',
    version: true
};

gulp.task('sass', function () {
    return gulp.src('./scss/viralcss.scss')
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);