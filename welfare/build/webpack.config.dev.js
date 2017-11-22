'use strict'

const path = require('path')
const Clean = require('clean-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./webpack.config.base.js')
const dllJs = 'http://2haohrcdn.cn/dll.js'

config.output.path = process.cwd() + '/dist/dev/'

config.entry = {
    index: ['./src/index.js']
}

config.plugins = config.plugins.concat([
  new Clean(['dist/dev'], {
    root: process.cwd()
  }),
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

module.exports = config
