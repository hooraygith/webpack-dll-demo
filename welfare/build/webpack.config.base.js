'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dllJs = '/node_modules/dll/dist/dll.js'

module.exports = {
    entry: {
        index: ['./src/index.js']
    },
    output: {
        filename: '[name]-[hash:8].js',
        chunkFilename: '[name]-[chunkhash:8].js',
        publicPath: '/',
        crossOriginLoading: 'anonymous'
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.common.js'
        },
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Vue: 'vue',
            $: 'zepto-webpack'
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
    ]
}
