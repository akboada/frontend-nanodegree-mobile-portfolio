var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    rimraf = require('gulp-rimraf');

var paths = {
	scripts: ['./js/**/*.js','./views/js/**/*.js'],
	content: ['./*.html','./views/**/*.html']
}

gulp.task('scripts', function(){
     gulp.src(paths.scripts, {base: "./"})
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('content', function() {
    return gulp.src(paths.content, {base: "./"})
        .pipe(minifyHTML({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('clean', function(cb) {
    rimraf('./build', cb);
});

gulp.task('default', ['clean', 'scripts', 'content']);