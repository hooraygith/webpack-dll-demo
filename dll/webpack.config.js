const path = require('path')
const webpack = require('webpack')
const Clean = require('clean-webpack-plugin')

module.exports = {
    entry: {
        dll: [
            'jquery'
        ]
    },
    output: {
        path: path.resolve(process.cwd(), `dist/`),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'vue': 'vue/dist/vue.common.js'
        },
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: `dist/[name].json`
        }),
        new Clean(['dist/dev'], {
            root: process.cwd()
        })
    ]
}

