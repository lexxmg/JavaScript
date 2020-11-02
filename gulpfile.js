const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

gulp.task('build', () => {
  gulp.src('scripts/scripts.js')
    .pipe( babel() )
    .pipe( minify() )
    .pipe( gulp.dest('./build') );
});
