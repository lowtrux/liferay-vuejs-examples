
module.exports = {
  // Change build path to make the liferay-npm-bundler find it
  outputDir: 'build/resources/main/META-INF/resources/lib',
  runtimeCompiler: true,
  devServer: {
    port: 8088,
    proxy: {
      '^/o': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
  },
  pages: {
    index: {
      entry: 'dev/index.js',
      template: 'dev/index.html'
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  },
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
  configureWebpack: {
    performance: {
      hints: false
    }
  }
};
