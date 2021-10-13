const registerRouter = require('./backend/router')

module.exports = {
  css: {
    // 向 CSS 相关的 loader 传递选项
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // 全局引入 variable 和 mixin
        prependData: `
          @import "~@/assets/scss/variable.scss";
          @import "~@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before (app) {
      registerRouter(app)
    }
  }
}
