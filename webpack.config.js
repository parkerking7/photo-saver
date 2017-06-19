var path = require("path");
// var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: "babel-loader"}
        ]
    }
};