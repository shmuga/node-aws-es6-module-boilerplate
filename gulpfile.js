var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var lambda = require('gulp-awslambda');
var config = require('./config.js');

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("clean", ['deploy'], function() {
  return gulp.src(['lambda.zip'])
    .pipe(clean({force: true}));
});

gulp.task('deploy', ['webpack'], function() {
  return gulp.src('./build/*.js')
        .pipe(zip('lambda.zip'))
        .pipe(lambda(config.lambda, {region: config.region}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['webpack', 'deploy', 'clean']);
