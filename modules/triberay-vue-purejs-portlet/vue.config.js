
module.exports = {
  // Change build path to make the liferay-npm-bundler find it
  outputDir: 'build/',
  //runtimeCompiler: true,
  publicPath: '/o/triberay-vue-purejs-portlet/',
  pages: {
    index: {
      entry: '.webpack/index.js',
      template: '.webpack/index.html'
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  }
};
