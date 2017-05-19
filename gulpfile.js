var gulp        = require('gulp');
var gutil       = require('gulp-util');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var browserify  = require('gulp-browserify');
var plumber     = require('gulp-plumber');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/js/*.js", ['js']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

//browserify Launch
gulp.task('js', function(){
  gulp.src('app/js/main.js')
  .pipe(plumber())
  .pipe(browserify({ debug:true }))
  .pipe(concat ('build.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js/dist/'))
  .pipe(browserSync.stream())
});

gulp.task('default', ['serve']);
