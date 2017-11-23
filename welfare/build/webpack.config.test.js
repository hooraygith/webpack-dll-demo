'use strict'

const path = require('path')
const Clean = require('clean-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./webpack.config.base.js')

config.output.path = process.cwd() + '/dist/test/'

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
)

module.exports = config
