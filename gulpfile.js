var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var server = gls.new('app.js');
var runSequence = require('run-sequence');

gulp.task('sass', function () {
    gulp.src('source_sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch('source_sass/*.scss', ['sass'], function (file) {
        server.notify.apply(server, [file]);
    });
});

// Server task
gulp.task('server', function () {
    server.start();
});

gulp.task('default', function(callback) {
    runSequence(['sass', 'server', 'watch'], callback);
});
