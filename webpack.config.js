const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    devServer: {
        open: true,
        contentBase: 'src',
    },
    module: {
        rules: [
            { test: /\.vue$/, use: ['vue-loader'] },
            { test: /\.less$/,use: ['less-loader'] },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // 修改导入vue包的路径，导入最全的vue包
            // vue$: 'vue/dist/vue.js',
        },
    },
}
