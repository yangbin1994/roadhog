const pathExists = require('path-exists');
const fs = require('fs');
const explain = require('explain-error');
const paths = require('../config/paths');

module.exports = function(fileName) {
  const configPath = paths.resolveApp(fileName);
  if (pathExists.sync(configPath)) {
    try {
      return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } catch (e) {
      throw explain(e, `Config path ${fileName} parse error.`);
    }
  } else {
    return {};
  }
};