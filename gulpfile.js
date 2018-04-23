var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task("default", function(){
  console.log("Wayne - You have created gulp task");
});

gulp.task('html', function(){
  console.log('this is html');
});

gulp.task('styles', function(){
  console.log('this is styles');
});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
