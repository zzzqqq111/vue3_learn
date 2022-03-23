// const { defineConfig } = require('@vue/cli-service')
const path = require("path")
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: "static",    // 放置静态资源
  chainWebpack: webpackConfig => {
    // 修改网站标题
    webpackConfig.plugin("html").tap(args =>{
      args[0].title = "vue3项目"
      return args
    })
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@views': path.join(__dirname, './src/views'),
        '@components': path.join(__dirname, './src/component'),
        '@utils': path.join(__dirname, './src/utils'),
        '@assets': path.join(__dirname, './src/assets'),
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '~@/style/global.scss'`,
      }
    }
  }
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 8080,
  //   proxy: {
  //     "/admin": {    // 代理
  //       target: '',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/admin': '/admin'
  //       }
  //     }
  //   }
  // },
}