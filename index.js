var { getOptions, stringifyRequest } = require('loader-utils');
var path = require('path');

var templateUrlRegex = /templateUrl\s*:\s*['"`](.*?)['"`]\s*([,}\n])/gm;

const DEFAULTS = {
  basePath: ''
};

module.exports = function(source) {
  var context = this;
  const options = Object.assign(
    {},
    DEFAULTS,
    getOptions(context),
  );

  if (context.cacheable) {
    context.cacheable();
  }

  return source.replace(templateUrlRegex, function(match, url, ending) {
    return 'template: require(' + stringifyRequest(context, path.join(options.basePath, url)) + ')' + ending;
  });
};
