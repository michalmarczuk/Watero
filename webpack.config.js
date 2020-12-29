'use_strict'

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './watero/src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/watero'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './watero/src/index.html'
        }),
        new copyWebpackPlugin([
            {from: './watero/src/img/*.png', to: './img', flatten: true},
            {from: './watero/src/styles.css', to: '.'},
            {from: './watero/manifest.json', to: '../'}
        ])
    ]
}