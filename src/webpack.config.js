const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries"); // fix js come output with css


module.exports = {
    watch: true,
    mode: 'development',
    // mode: 'production',

    entry: {
        // js
        'js/app' : './js/app.js', // for entire site
        'js/woo' : './js/woo.js', // for woo commerce

        // sass
        'css/app' : './sass/app.scss', // for entire site
        'css/woo' : './sass/woo.scss' // for woo commerce
    },
    

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './../assets/')
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // convert css to js string css
                    "sass-loader" // convert sass to css
                ]
            },
        ],
    },

    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),

    ]
}