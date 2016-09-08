var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //简化操作HTMl的插件
// var ExtractTextPlugin = require('extract-text-webpack-plugin'); //用来关联外部文件
module.exports = {
    entry: {
        index: ['./src/js/entry.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '', //打包后的url前缀
        // filename: '[name].js'
        filename: 'bundle.[chunkhash].js'

    },
    resolve: {
        extensions: ['', '.js', '.scss', 'html'] //省略扩展名
    },
    moudle: {
        loaders: [
                { test: /\.js$/, loader: "babel" },
                { test: /\.css$/, loader: 'style!css' },
                //'style-loader!css-loader',省略了-loader
                // loader: ExtractTextPlugin.extract('style', ['css'])
                { test: /\.(jpg|png)$/, loader: "url?limit=8192" },
                { test: /\.scss$/, loader: 'style!css!sass' }
                // loader: ExtractTextPlugin.extract('style', ['css', 'sass'])

            ] //loader的编译顺序为从后往前
    },
    plugins: [ //这里变中括号了！
        // new ExtractTextPlugin('[name].[chunkhash].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/tpl/index.html',
            inject: true //true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
        })

    ]
}
