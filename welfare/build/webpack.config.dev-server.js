const path = require('path')
const Clean = require('clean-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dllJs = '/node_modules/dll/dist/dll.js'
const config = require('./webpack.config.base.js')

config.entry = {
    index: ['./src/index.js']
}

config.plugins = config.plugins.concat([
  new webpack.DllReferencePlugin({
    context: '.',
    manifest: require(process.cwd() + '/node_modules/dll/dist/dll.json')
  }),
  new HtmlWebpackPlugin({ // 生成首页
    chunks: ['index'],
    template: process.cwd() + '/src/index.ejs',
    filename: 'index.html',
    inject: false,
    dllJs: dllJs
  })
])

config.devServer = {
    // proxy: {
    //     "/": {
    //         bypass: function(req) {
    //             const re = /(\/[a-zA-Z0-9\-\_]*)+(\/)?(\?.+)?/i
    //             if (re.test(req.url)) {
    //                 return "/index.html"
    //             }
    //         }
    //     }
    // }
}

module.exports = config
