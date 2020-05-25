module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'commom': '@/commom',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}