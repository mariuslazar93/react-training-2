var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index-bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            {
                test: [/\.js$/],
                exclude: /node_modules/,
                loader: "babel",
                query:{
                    presets: ['es2015','react']
                }
            }
        ]
    }
}
