var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var gulpMocha = require('gulp-mocha');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('styles', function(){

    gulp.src(jsFiles).pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('test', function(){

    gulp.src('test/*.js', {read:false})
        .pipe(gulpMocha({reporter: 'nyan'}))
});