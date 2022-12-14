const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('@babel/core');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require ('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //pnublicPath:"./",
    },
    mode: 'development',
    resolve: {
        extensions: ['.js' , '.jsx'],
    },
    module: {
        rules: [
         {
		    test: /\.(js|jsx)$/,
		    exclude: /node_modules/,
            use: 
                {
                loader: 'babel-loader'
                }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        },
        {
            test: /\.(css|scss)$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        },
        {
            test: /\.(pdf|png|svg|jpg|gif|webp)$/,
            type: 'asset',
        },
        {
            test: /\.mp4$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "video"
                    }
                }
            ]
        }
    ]
},
plugins: [ 
    new HtmlWebpackPlugin({ 
        template: './public/index.html', 
        filename: './index.html' 
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),

    new CleanWebpackPlugin(),
],
devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, 'dist'),
    compress:true,
    port: 3000,
}
}
