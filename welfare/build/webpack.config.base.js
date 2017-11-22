'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
    output: {
        filename: '[name]-[hash:8].js',
        chunkFilename: '[name]-[chunkhash:8].js',
        publicPath: '/',
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }, {
            test: /\.html$/,
            use: 'html-loader'
        }]
    },
    resolve: {
        modules: ['node_modules']
    },
    plugins: []
}
