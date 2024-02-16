const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const minifyHtml = require('gulp-minify-html');

const paths = {
    html: {
        src: 'src/**/*.html',
        dest: 'dist/'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images'
    }
};

function serve() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch(paths.html.src, html);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.html.src).on('change', browserSync.reload);
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(minifyHtml())
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

gulp.task('html', html);
gulp.task('images', images);
gulp.task('serve', serve);

gulp.task('default', gulp.parallel(serve, html, images));
