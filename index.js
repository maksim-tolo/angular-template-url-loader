var loaderUtils = require('loader-utils');
var path = require('path');

var templateUrlRegex = /templateUrl\s*:\s*['"`](.*?)['"`]\s*([,}\n])/gm;

module.exports = function(source) {
  var basePath = loaderUtils.parseQuery(this.query).basePath || '';

  if (this.cacheable) {
    this.cacheable();
  }

  return source.replace(templateUrlRegex, function(match, url, ending) {
    return 'template: require(' + loaderUtils.stringifyRequest(this, path.posix.join(basePath, url)) + ')' + ending;
  });
};
