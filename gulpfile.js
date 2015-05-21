'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  	var b = browserify({
	    entries: './js/app.js',
	    debug: true
	});

	return b.bundle()
	    .pipe(source('./bundle.js'))
	    .pipe(buffer())
	    .pipe(sourcemaps.write('./'))
	    .pipe(gulp.dest('./js'));
});