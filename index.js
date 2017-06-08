'use strict';
var uglify = require('uglify-es');
var minifier = require('./minifier');
var GulpUglifyError = require('./lib/gulp-uglify-error');

module.exports = function (opts) {
  return minifier(opts, uglify);
};

module.exports.GulpUglifyError = GulpUglifyError;
