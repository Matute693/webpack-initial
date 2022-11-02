const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    output: {
        clean: true
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
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebPack({
            title: 'Mi webpack app',
            // filename: 'index.html','
            // template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}