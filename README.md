# Laravel Elixir - React 

[![Version](https://img.shields.io/npm/v/laravel-react.svg?style=flat-square)](https://www.npmjs.com/package/laravel-react)
[![License](https://img.shields.io/npm/l/laravel-react.svg?style=flat-square)](https://www.npmjs.com/package/laravel-react)
[![Monthly downloads](https://img.shields.io/npm/dm/laravel-react.svg?style=flat-square)](https://www.npmjs.com/package/laravel-react)

`npm install laravel-react --save-dev`

Then require `laravel-react` in your gulpfile.

Pretty simple.

```js
var elixir = require('laravel-elixir');

require('laravel-react');

elixir(function(mix) {

    mix.elixirReactify({
        inputFile: './resources/assets/js/react/app.js', 
        inputFileName: 'bundle.js', 
        outputDirectory: 'public/js/',
        watch: './resources/assets/js/react/**'
    })
    .version(['public/js/bundle.js']);

});
```

Arguments:

 - inputFile src
 - inputFileName file
 - outputDirectory dest
 - watch trigger elixir watch


