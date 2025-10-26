const {readFileSync} = require('node:fs');
const path = require('node:path');

module.exports = {
  isProd: true,
  packageSource: 'components',
  packageVersion: require('../../package.json').version
    + ' ('
    + readFileSync(
        path.join(__dirname, '../../comhash.yml'), 'utf8').split('\n')[1]
          .slice(0, 8)
    + ')',
  sourcePath: 'src',
  generatedPath: 'src/internal/generated',
  staticSitePath: 'build/static',
  compiledStyleDictionary: 'lib/style-dictionary',
  targetPath: 'lib'
};
