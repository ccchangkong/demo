var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //简化操作HTMl的插件

module.exports = {
    entry: { app: ['./src/js/entry.js'] },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'

    },
    resolve: {
        extensions: ['', '.js', '.scss'], //省略扩展名
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            Css: '../sass/style.scss', //后续直接 require('AppStore') 即可
        }
    },
    module: {
        loaders: [
                { test: /\.js$/, loader: "babel" },
                { test: /\.css$/, loader: "style!css" },
                { test: /\.scss$/, loader: "style!css!sass" }
                // loader: ExtractTextPlugin.extract('style', ['css', 'sass'])
            ] //loader的编译顺序为从后往前
    },
    plugins: [ //这里变中括号了！
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/tpl/index.html',
            inject: true //true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
        })

    ]
}
