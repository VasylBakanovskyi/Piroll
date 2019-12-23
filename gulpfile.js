const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();

function style() {
    return (
        gulp
            .src("client/scss/*.scss")
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer()]))
            .pipe(gulp.dest("assets/css"))
            .pipe(browserSync.stream())
    );
}

function reload() {
    browserSync.reload();
}

function javascript() {
    return (
        gulp
            .src("client/js/*.js")
            .pipe(browserSync.stream())
    );
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('client/scss/*.scss').on('change', style); 
    gulp.watch("client/js/*.js").on('change', javascript);
    gulp.watch("index.html").on('change', reload);
}

exports.style = style;
exports.watch = watch;