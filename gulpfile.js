"use strict";

var gulp = require('gulp');
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify');//Transform JSX to JS
var source = require('vinyl-source-stream');//use conventional text stream with gulp
var concat = require('gulp-concat');//concats files

//configs 
var config = {
    port  : 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html : './src/*.html',
        js : './src/**/*.js',//to look sub directory also
      
        dist : './dist',
        mainJs : './src/main.js'
    }
}







//js task
gulp.task('js',function(){
    browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error',console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist+'/scripts'))
    

});

//watch Task
gulp.task('watch',function(){
    gulp.watch(config.paths.js,['js',]);
})
//default task
gulp.task('default',['js','watch']);//whenever v open console and type gulp this task ll b executed
