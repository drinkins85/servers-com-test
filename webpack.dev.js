const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const LOCAL_BACKEND_SERVER = 'http://localhost:7777';
const HYBRID_DEV_SERVER = 'https://real-backend-server.ru';

module.exports = (env) => {
    let target;
    switch (env.DEV_MODE) {
        case 'local':
            target = LOCAL_BACKEND_SERVER;
            break;
        default:
            target = HYBRID_DEV_SERVER;
    }

    return merge(common, {
        mode: 'development',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist/',
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'bundle.css',
            }),
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, '/'),
            },
            proxy: {
                '/api': {
                    target: target,
                    secure: false,
                    logLevel: 'debug',
                },
            },
            compress: true,
            port: 9000,
            hot: true,
        },
        devtool: 'source-map',
    });
};
