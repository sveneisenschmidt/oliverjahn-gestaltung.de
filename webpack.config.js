var webpack = require('webpack');
var extracttext = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/script.js',
    output: {
        path: 'assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: extracttext.extract('css-loader')
            },
            {
                test: /\.less$/,
                loader: extracttext.extract('css-loader!less-loader')
            },
            { test: /\.woff(\?.*)?$/, loader: "file-loader" },
            { test: /\.woff2(\?.*)?$/, loader: "file-loader" },
            { test: /\.ttf(\?.*)?$/, loader: "file-loader" },
            { test: /\.eot(\?.*)?$/, loader: "file-loader" },
            { test: /\.svg(\?.*)?$/, loader: "file-loader" },
            { test: /\.jpg(\?.*)?$/, loader: "file-loader" },
        ]
    },
    plugins: [
        new extracttext('bundle.css', { allChunks: false }),
        new webpack.optimize.UglifyJsPlugin(),
    ]
};
