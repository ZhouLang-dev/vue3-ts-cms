const path = require('path')
// const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  productionSourceMap: false,
  configureWebpack(config) {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
    }
    // element-plus 按需导入
    // 项目根目录下自动新建了 components.d.ts auto-imports.d.ts
    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    )
    if (process.env.NODE_ENV === 'production') {
      // webpack包分析工具
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  }
  // chainWebpack(webpack) {}
}
