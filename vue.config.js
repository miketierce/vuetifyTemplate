module.exports = {
  baseUrl: '',
  outputDir: 'spa',
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  devServer: {
    // proxy: 'http://localhost:3000',
    // public: '10.190.81.79:3000',
    watchOptions: {
      poll: true
    }
  }
}
