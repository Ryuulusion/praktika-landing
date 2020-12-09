const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
var sass = require ('gulp-sass');

gulp.task('server', function() {
    browserSync.init({
        server:{
            port: 9000,
            baseDir: "build"
        }
});


    gulp.watch('build/**/*').on('change', browserSync.reload);
});


gulp.task('template:compile', function buildHTML(){
    return gulp.src('source/template/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
});

gulp.task('sass', function () {
    return gulp.src('source/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('.build/css'));
});
