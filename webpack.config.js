const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext => isDev ? `bundle.${ext}` : `bundle[hash].${ext}`
const jsLoaders = () => {
    const loader = [
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-syntax-class-properties']
            }
        }
    ]
    if(isDev) {
        loader.push('eslint-loader')
    }
    return loader
}


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        open: true,
        port: 3000,
        hot: isDev
    },
    target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: 'favicon.ico', to: ""},
            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
        ],
    }
}