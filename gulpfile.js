var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    minifyInline = require('gulp-minify-inline'),
    imagemin = require('gulp-imagemin'),
    concatify = require('gulp-concat');

var paths = {
	scripts: ['./js/**/*.js','./views/js/**/*.js'],
	content: ['./*.html','./views/**/*.html'],
    styles: ['./css/**/*.css','./views/css/**/*.css'],
    images: ['img/**/*', './views/images/**/*' ]
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

gulp.task('images', function() {
    return gulp.src(paths.images, {base:'./'})
                .pipe(imagemin({
                    progressive: true,
                    optimizationLevel: 3
                }))
                .pipe(gulp.dest('./build'))
})

gulp.task('default', ['scripts', 'content', 'styles', 'images']);
