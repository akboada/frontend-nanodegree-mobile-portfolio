var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    minifyInline = require('gulp-minify-inline'),
    concatify = require('gulp-concat');

var paths = {
	scripts: ['./js/**/*.js','./views/js/**/*.js'],
	content: ['./*.html','./views/**/*.html'],
    styles: ['./css/**/*.css','./views/css/**/*.css']
}

gulp.task('scripts', function(){
     gulp.src(paths.scripts, {base: './'})
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('content', function() {
    return gulp.src(paths.content, {base: './'})
        .pipe(minifyHTML({
            empty: true,
            quotes: true
        }))
        .pipe(minifyInline())
        .pipe(gulp.dest('./build'));
});

gulp.task('styles', function() {
    gulp.src(paths.styles, {base:'./'})
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build'));
})
gulp.task('default', ['scripts', 'content', 'styles']);