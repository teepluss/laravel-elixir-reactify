var gulp       = require('gulp');
var elixir     = require('laravel-elixir');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var reactify   = require('reactify');

var Task = elixir.Task;

// Create a new command for Laravel Elixir that will browserify and Reactify 
elixir.extend('elixirReactify', function(params) {
    new Task('browserifyreactify', function() {
        var b = browserify();
        b.transform(reactify); 
        b.add(params.inputFile);

        return b.bundle()
            .pipe(source(params.inputFileName))
            .pipe(gulp.dest(params.outputDirectory));
    })
    .watch(params.watch);
});