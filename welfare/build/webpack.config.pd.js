/**
 * Created by otherlite on 16/9/6.
 */
'use strict'

const path = require('path')
const webpack = require('webpack')
const Clean = require('clean-webpack-plugin')
const config = require('@business/dll/common/webpack.config.js')
const dllPackage = require(process.cwd() + '/node_modules/@business/dll/package.json')

config.output.publicPath = `https://cdn.2haohr.com/dianmi-fe/dianmi-fe-business-m-employee${process.env.ASSET_PATH}/`
config.output.path = path.resolve(`dist/pd/`)

config.plugins = config.plugins.concat([
    new Clean(['dist/pd'], {
        root: process.cwd()
    }),
    new webpack.optimize.UglifyJsPlugin({ // 压缩
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.DllReferencePlugin({
        context: '.',
        manifest: require(`${process.cwd()}/node_modules/@business/dll/dist/pd/${dllPackage.version}/dll.json`)
    })
])

module.exports = config
