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
            remote1: 'remote1@http://localhost:4001/remoteEntry.js',
          },
          shared: dependencies,
        }),
      ],
    },
  },
};
