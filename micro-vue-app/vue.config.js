const WebpackAssetsManifest = require('webpack-assets-manifest');

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json',
        customize(entry) {
          return {
            key: `${entry.key.replace('app', 'main')}`,
            value: `/${entry.value}`,
          };
        },
        transform(assets) {
          return {
            files: assets,
          };
        },
      }),
    );
  },
  chainWebpack: (config) => {
    config.merge({
      externals:
        process.env.NODE_ENV === 'development'
          ? []
          : {
              vue: 'Vue',
              'vue-router': 'VueRouter',
            },
    });
  },
});
