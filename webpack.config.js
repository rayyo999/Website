const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js',
    },
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        historyApiFallback:true,
        open:true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[hash].css"
        }),
    ],
    devtool:"source-map"
};