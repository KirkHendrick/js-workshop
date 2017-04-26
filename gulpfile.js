const gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	watch = require('gulp-watch');

gulp.task('watchTests', function () {
	watchTests();
});

gulp.task('test', pipeToMocha);

gulp.task('default', pipeToMocha);

function watchTests() {
	return watch(['./*.js', './**/*.js'], pipeToMocha);
}

function pipeToMocha() {
	return gulp.src('./test/tests.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}))
		.pipe(gulp.dest('build'));
}
