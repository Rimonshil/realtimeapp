const rucksack = require('rucksack-css');
const Webpack = require('webpack');
const path = require('path');

function makeWebpackConfig() {
    return {
        context: path.join(__dirname, './client'),
        entry: {
            js: './index.js',
            html: './index.html',
            vendor: [
                'vue',
                'vue-router',
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: 'file?name=[name].[ext]'
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.css$/,
                    include: /client/,
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
            alias: {
                'vue$': 'vue/dist/vue.js'
            }
        },
        postcss: [
            rucksack({
                autoprefixer: true
            })
        ],
        plugins: [
            new Webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
            new Webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
                }
            })
        ],
        devServer: {
            contentBase: './client',
            hot: true
        }
    };
}