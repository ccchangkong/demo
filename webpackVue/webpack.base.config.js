var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //简化操作HTMl的插件
// var ExtractTextPlugin = require('extract-text-webpack-plugin'); //用来关联外部文件
module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, './dist'),
        // publicPath: '', //打包后的url前缀
        // filename: 'bundle.js'
        filename: 'bundle.[hash].js'

    },
    resolve: {
        extensions: ['', '.js', '.scss'], //省略扩展名
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            Css: './sass/style.scss', //后续直接 require('AppStore') 即可
        }
    },
    module: {
        loaders: [
                // 解析.vue文件
                { test: /\.vue$/, loader: 'vue' },
                { test: /\.js$/, loader: "babel", exclude: /node_modules/, query: { presets: ['es2015'], plugins: ['transform-runtime'] } },
                { test: /\.css$/, loader: "style!css" },
                //'style-loader!css-loader',省略了-loader
                // loader: ExtractTextPlugin.extract('style', ['css'])
                { test: /\.(jpg|png)$/, loader: "url?limit=8192" },
                { test: /\.scss$/, loader: "style!css!sass" },
                //html模板编译？
                { test: /\.(html|tpl)$/, loader: 'html' }
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
