var gulp = require('gulp')
  , sass = require('gulp-sass')
  , minifyCss = require('gulp-minify-css')
  , rev = require('gulp-rev')

var paths = {
  view: ['./view/*.jade'],
  scss: ['./public/dev/scss/**/main.scss'],
  css: ['./public/dev/css/**/main.css']
}

gulp.task('default', function(){
  gulp.watch(paths.scss,['scss'])
})

gulp.task('scss', function(){
  gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest('./public/dev/css'))
})

gulp.task('cssmin', function(){
  gulp.src(paths.css)
    .pipe(minifyCss())
    .pipe(gulp.dest('./public/css/dist'))
})

gulp.task('build', ['cssmin']);
