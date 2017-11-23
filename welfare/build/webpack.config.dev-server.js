const path = require('path')
const Clean = require('clean-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dllJs = '/node_modules/dll/dist/dll.js'
const config = require('./webpack.config.base.js')


module.exports = config
