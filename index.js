var loaderUtils = require('loader-utils');
var path = require('path');

var templateUrlRegex = /templateUrl\s*:\s*['"`](.*?)['"`]\s*([,}\n])/gm;

module.exports = function(source) {
  var context = this;
  var basePath = loaderUtils.parseQuery(context.query).basePath || '';

  if (context.cacheable) {
    context.cacheable();
  }

  return source.replace(templateUrlRegex, function(match, url, ending) {
    return 'template: require(' + loaderUtils.stringifyRequest(context, path.join(basePath, url)) + ')' + ending;
  });
};
