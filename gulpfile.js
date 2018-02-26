var gulp = require('gulp');
var uglify = require ('gulp-uglify');
var minifyCss = require ('gulp-minify-css');
var sass = require ('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload();


gulp.task('browser-sync', function(){
	browserSync.init({
		server:{
			baseDir:"./"
		},
		browser: ["firefox"]
	});
});


gulp.task('style', function(){
	console.log('style task has been launched');
	return gulp.src('src/style/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCss())
	.pipe(gulp.dest('dist/style'))
	.pipe(browserSync.stream());

});

gulp.task('scripts', function(){
	console.log('the task scripts has been launched');
	return gulp.src('src/scripts/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['style','scripts']);

gulp.task('watch', ['default','browser-sync'], function(){
	console.log('the task watch has been launched');
	// gulp.watch("src/style/**/*.scss", ['style', reload]);
	// gulp.watch("src/scripts/**/*.js", ['scripts', reload]);
	gulp.watch("src/style/**/*.scss", ['style']);
	gulp.watch("src/scripts/**/*.js", ['scripts']);
	browserSync.reload();
})


