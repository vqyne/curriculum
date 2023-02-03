// Requis
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = '../scss'; // dossier de travail
var destination = '../css'; // dossier à livrer

gulp.task('css', function () {
  return gulp.src(source + '/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest(destination));
});

// Tâche "watch" = je surveille *less
gulp.task('watch', function () {
  gulp.watch(source + '/*.scss', ['css']);
});