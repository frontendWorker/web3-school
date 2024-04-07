const { resolve } = require('path');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const Dotenv = require('dotenv-webpack');
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const webpackBaseConfig = {
  entry: {
    main: resolve('src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
    ],
  },
  plugins: [new Dotenv()],
};

module.exports = merge.default(webpackBaseConfig, _mergeConfig);
