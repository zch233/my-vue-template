'use strict'
const path = require('path')

const cdn = {
  css: [],
  js: ['http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js']
}

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: 2333,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    // public/index.html 里的 `title` 会使用这里的 `name`
    name: 'app',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack (config) {
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
    config.plugins.delete('preload') // 删除懒加载模块的 prefetch preload，降低带宽压力
    config.plugins.delete('prefetch') // 删除懒加载模块的 prefetch preload，降低带宽压力
  }
}
