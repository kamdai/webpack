'use strict'
const path = require('path')
module.exports = {
    entry: './src/index.js',  // 打包文件入口
    output: {
        path: path.join(__dirname, 'dist'), // 输出文件夹
        filename: 'bundle.js' // 输出文件名
    },
    mode: 'production' // 环境
}