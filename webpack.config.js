const path = require('path');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
    entry: './src/App.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    loader: "css-loader!sass-loader",
                  })
            },
            {
                test: /\.(|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'file-loader?limit=10024&name=images/[name].[ext]'
            },
            {
                test: /\.(|eot|ttf|otf|woff|woff2|)(\?\S*)?$/,
                loader: 'file-loader?limit=10024&name=fonts/[name].[ext]'
            }
        ],
    },
    plugins: [
            new ExtractTextPlugin( "bundle.css" )
        ],

    devtool: 'cheap-eval-source-map',
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};