const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'container',
          remotes: {
            remote0: 'remote0@http://localhost:4000/remoteEntry.js',
          },
          shared: {
            ...dependencies,
            'react-router-dom': {
              singleton: true,
            },
            react: {
              requiredVersion: dependencies.react,
              singleton: true,
            },
          },
        }),
      ],
    },
  },
};
