const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      },
    },
  },
  // devServer: {
  //   proxy: {
  //     "/": {
  //       target: 'http://ec2-3-20-224-12.us-east-2.compute.amazonaws.com:8080/user/login',
  //       changeOrigin: true,
  //     }
  //   }
  // }
}