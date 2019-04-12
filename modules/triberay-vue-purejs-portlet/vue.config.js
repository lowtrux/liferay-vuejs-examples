
module.exports = {
  // Change build path to make the liferay-npm-bundler find it
  outputDir: 'build/',
  //runtimeCompiler: true,
  configureWebpack: {
    performance: {
      hints: false
    }
  }
};
