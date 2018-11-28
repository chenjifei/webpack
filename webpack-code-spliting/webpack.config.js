var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    entry: {
        index: "./index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist/"

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()

    ],
    devServer: {
        port: 3000,
        hot: true
    }
}