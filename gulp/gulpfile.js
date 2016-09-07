let gulp = require('gulp');
// 引入组件
let browserSync = require('browser-sync').create(), //监听刷新
    reload = browserSync.reload,
    ftp = require('gulp-ftp'), // ftp上传
    gutil = require('gulp-util'),
    sass = require('gulp-sass'), // sass
    cleancss = require('gulp-clean-css'), // CSS压缩
    autoprefixer = require("gulp-autoprefixer"),
    uglify = require('gulp-uglify'), // js压缩
    concat = require('gulp-concat'), // 合并文件
    rename = require('gulp-rename'), // 重命名
    clean = require('gulp-clean'), //清空文件夹
    imagemin = require('gulp-imagemin'), //压缩图片
    rev = require('gulp-rev-append'), //添加MD5
    htmlmin = require('gulp-htmlmin'); // 压缩html
// git = require('gulp-git'),              //git


gulp.task('test', () => console.log('this is a test'));
// gulp.task('copy',()=>{return gulp.src('src/tpl/*.html').pipe(gulp.dest('dist'))});

// build
// sass解析
gulp.task('sass', () => {
    gulp.src('src/sass/*.scss')
        //输出为压缩
        // .pipe(sass({
        //     outputStyle: 'compressed'
        // }))
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))
});
// 合并、压缩、重命名css
gulp.task('css', ['sass'], () => {
    gulp.src(['src/css/*.css', '!src/css/areaMap.css'])
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(cleancss())
        .pipe(gulp.dest('dist/css'));
});
// 合并，压缩,重命名js文件
gulp.task('js', () => {
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('html', () => {
    gulp.src('src/tpl/*.html')
        .pipe(rev())
        .pipe(htmlmin({
            removeComments: true, //清除HTML注释
            collapseWhitespace: true, //压缩HTML
            collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
            minifyJS: true, //压缩页面JS
            minifyCSS: true //压缩页面CSS
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('img', () => {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});
// 将bower的库文件对应到指定位置
gulp.task('carry', () => {
    gulp.src('/src/brower/*')
        .pipe(gulp.dest('/dist/brower/'));
    // gulp.src('/src/img/*')
    //     .pipe(gulp.dest('/dist/img/'));
});

gulp.task('rev', () => {
    gulp.src('dist/index.html')
        .pipe(rev())
        .pipe(gulp.dest('dist/'));
});



//dev
gulp.task('sass:dev', () => {
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))
        .pipe(reload({ stream: true }))
});
// 合并、重命名css
gulp.task('css:dev', ['sass:dev'], () => {
    gulp.src(['src/css/*.css', '!src/css/areaMap.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css/'))
});
// 合并、重命名js
gulp.task('js:dev', () => {
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(reload({ stream: true }))
});
gulp.task('html:dev', () => {
    gulp.src('src/tpl/*.html')
        .pipe(gulp.dest('dist'))
});
// 清空图片、样式、js
gulp.task('clean', () => {
    gulp.src('dist', { read: false })
        .pipe(clean({ force: true }));
});


gulp.task('upload', () => {
    gulp.src('dist/**')
        .pipe(ftp({
            host: '8.8.8.8', // 远程主机ip
            port: 22, // 端口
            user: 'username', // 帐号
            pass: 'password', // 密码
            remotePath: '/project' // 上传路径，不存在则新建
        }))
        .pipe(gutil.noop())
})


//正式构建
gulp.task('build', ['clean','css', 'js', 'img', 'html', 'carry']);
//开发构建
gulp.task('dev', ['css:dev', 'js:dev', 'html:dev', 'carry'], () => {
    browserSync.init({
        server: {
            baseDir: "dist" // 设置服务器的根目录为dist目录
        },
        notify: false // 开启静默模式
    });
    // 我们使用gulp的文件监听功能，来实时编译修改过后的文件
    gulp.watch('src/js/*.js', ['js:dev']);
    gulp.watch('src/sass/*.scss', ['sass:dev']);
    gulp.watch('src/tpl/*.html', ['html:dev']);
});


