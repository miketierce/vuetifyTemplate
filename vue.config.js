module.exports = {
  baseUrl: '',
  outputDir: 'spa',
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  devServer: {
    proxy: 'http://localhost:8080',
    public: '10.190.81.79:8080',
    watchOptions: {
      poll: true
    }
  }
}
