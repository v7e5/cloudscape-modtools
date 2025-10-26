const path = require('path');
const workspace = require('./workspace');

const themes = [
  {
    name: 'default',
    packageJson: { name: '@cloudscape-design/components' },
    designTokensOutput: 'index',
    designTokensDir: 'design-tokens',
    designTokensPackageJson: { name: '@cloudscape-design/design-tokens' },
    outputPath: path.join(workspace.targetPath, 'components'),
    primaryThemePath: './classic',
    secondaryThemePaths: ['./visual-refresh-secondary'],
    alwaysVisualRefresh: true
  }
];

module.exports = themes;
