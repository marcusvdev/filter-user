const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');

function compile(){
	return(
	gulp.src('./assets/sass/*.scss')
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(sassGlob())
		.pipe(gcmq())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 3 versions'],
			cascade: false
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./assets/css/'))
	) 
}
exports.compile = compile;

function watchfiles(){
	gulp.watch('./assets/sass/**', compile);
}
const watch = gulp.parallel(watchfiles)
exports.watch = watch;