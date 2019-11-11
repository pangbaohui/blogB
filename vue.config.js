const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin' : '/' // 生产环境的地址从域名的根目录下开始指定

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 没有匹配到静态文件的请求都代理到配置的地址
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
