const minify = require('@node-minify/core');
const uglifyJS = require('@node-minify/uglify-js');

minify({
    compressor: uglifyJS,
    input: 'src/generator.js',
    output: 'dist/generator.js',
    callback: function(err, min) {}
});
minify({
    compressor: uglifyJS,
    input: 'src/utils.js',
    output: 'dist/utils.js',
    callback: function(err, min) {}
});
minify({
    compressor: uglifyJS,
    input: 'src/app.js',
    output: 'dist/app.js',
    callback: function(err, min) {}
});