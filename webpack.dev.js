const { merge } = require('webpack-merge');
const common = require('./webpack.common');
 
module.exports = merge(common, {
  mode: 'development',
  // devServer:{
  //   static:{
  //     directory: path.join(__dirname, 'src'),
  //   },
  //   compress: true,
  //   port: 3000,
  //   liveReload: true
  // },
  devtool: false
})