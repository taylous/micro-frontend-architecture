const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');

module.exports = {
  devServer: {
    port: 4000,
    historyApiFallback: true,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'remote0',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/bootstrap',
            './Button': './src/components/Button',
          },
          shared: {
            ...dependencies,
            'react-router-dom': {
              singleton: true,
            },
            react: {
              singleton: true,
            },
          },
        }),
      ],
    },
    configure: (webpackConfig) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: 'auto',
      },
    }),
  },
};
