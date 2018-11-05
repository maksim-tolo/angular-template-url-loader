const { getOptions, stringifyRequest } = require('loader-utils');
const path = require('path');

const templateUrlRegex = /templateUrl\s*:\s*['"`](.*?)['"`]\s*([,}\n])/gm;
const DEFAULTS = {
  basePath: ''
};

module.exports = function(source) {
  const options = Object.assign(
    {},
    DEFAULTS,
    getOptions(this),
  );

  if (this.cacheable) {
    this.cacheable();
  }

  return source.replace(templateUrlRegex, (match, url, ending) =>
    `template: require(${stringifyRequest(this, path.join(options.basePath, url))})${ending}`);
};
