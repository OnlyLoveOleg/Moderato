const path = require('path');

/**
 * @Tips
 * path.resolve() : Moderato/moderato-ui
 * path.resolve(__dirname, '..') : /Moderato/moderato-ui
 * config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']; : /Moderato/moderato-ui,node_modules
 */

module.exports = {
  stories: ['../src/stories/**/*.stories.tsx'],
  // add-on
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // node_modules上位の階層にset
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    // scssをset
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // aliasをset
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    // Return new config
    return config;
  },
};
