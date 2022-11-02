const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require('css-minimizer-webpack-plugin')
const Terser = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },
    // entry: './src/index.js',
    module: {
        rules: [
            {
                // agrego el html en carpeta dist
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    source: false
                }
            },
            {
                // Agrego el main.css a la carpeta dist 
                test: /\.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|git)$/,
                loader: 'file-loader'
            },
            {
                // Me asegura de subir la ultima version de Javascript al navegador cuando estoy en ambiente productivo
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },


    optimization: {
        // hago el minificado del codigo css dentro del dist/main.fullhash.css
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser(),
        ],
    },
    
    plugins: [
        new HtmlWebPack({
            title: 'Mi webpack app',
            // filename: 'index.html','
            // template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}