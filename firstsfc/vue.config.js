module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/my-vue-website/' : '/',
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true,
  },
};