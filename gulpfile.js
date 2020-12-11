const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const del = require("del");
const merge = require("merge-stream");
const autoprefixer = require('gulp-autoprefixer');



// Clean vendor
function clean() {
  return del(["./vendor/"]);
}


// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // jQuery files
  let jquery = gulp.src('./node_modules/jquery/dist/*')
    .pipe(gulp.dest('./vendor/jquery'));
  
  // Popper.js JS file
  let popper = gulp.src('./node_modules/@popperjs/core/dist/umd/popper.min.js')
    .pipe(gulp.dest('./vendor/popper'));
  
  // Bootstrap JS files
  let bootstrap_js = gulp.src([
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      ]
    )
    .pipe(gulp.dest('./vendor/bootstrap/js'));
  
  // Bootstrap SCSS files
  let bootstrap_scss = gulp.src('./node_modules/bootstrap/scss/**/*')
    .pipe(gulp.dest('./vendor/bootstrap/scss'));
  
  // Font Awesome CSS files
  let fontawesome_js = gulp.src('./node_modules/@fortawesome/fontawesome-free/css/all.min.css')
    .pipe(gulp.dest('./vendor/fontawesome/css'));
  
  // Font Awesome CSS files
  let fontawesome_fonts = gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(gulp.dest('./vendor/fontawesome/webfonts'));

  return merge(jquery, popper, bootstrap_js, bootstrap_scss, fontawesome_js, fontawesome_fonts);
}


// Compile scss files into a single minified css file
// This will also compile bootstrap
function style() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}


// Create a local server and watch for changes
function watch() {
  browserSync.init({
    server: {
      baseDir: ".",
      index: "./index.html"
    }
  });
  gulp.watch('./**/*.scss', style)
  gulp.watch('./**/*.html').on('change',browserSync.reload)
  gulp.watch('./**/*.js').on('change', browserSync.reload)
}


// Define tasks
const build = gulp.series(clean, modules, style);


// Export tasks
exports.default = build;
exports.build = build;
exports.watch = watch;
