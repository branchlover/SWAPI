const path =  require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080
    }
};