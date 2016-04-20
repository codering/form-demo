
// 按需编译。
fis.set('project.files', '/index.html');

// 采用 commonjs 模块化方案。
fis.hook('commonjs', {
    baseUrl: './modules',
    extList: ['.js', '.jsx'],
    path: {
      'http': 'http/http.js'
    }
});

// 改用 npm 方案，而不是用 fis-components
fis.unhook('components');
fis.hook('node_modules');

// 编译ES6
fis.match('{*.jsx,/modules/**.js}', {
  rExt: 'js',
  parser: fis.plugin('babel-5.x', {
    optional: ["es7.decorators", "es7.classProperties"]
  },{
    presets: ["es2015", "react", "stage-0"]
  })
});

// 设置成是模块化 js
fis.match('/{node_modules,modules}/**.{js,jsx}', {
  isMod: true,
  useSameNameRequire: true
});

// 添加css和image加载支持
fis.match('*.{js,jsx}', {
    preprocessor: [
      fis.plugin('js-require-css'),
      fis.plugin('js-require-file', {
        useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
      })
    ]
})

// antd 转换 便于兼容IE8
fis.match('/node_modules/antd/**.js', {
    parser: fis.plugin("translate-es3ify")
})

// 第三方js太多了，合并下
fis.match('/node_modules/**.js', {
    //optimizer: fis.plugin('uglify-js'),
    packTo: '/pkg/vendor.js'
})

// 用 loader 来自动引入资源。
fis.match('::package', {
    postpackager: fis.plugin('loader',{
      //useInlineMap: true
      //allInOne: true,
    })
});

/**********生产环境打包策略 Begin *********************/
fis.media("production")
 .match('**', {
  //domain: "/spb", // 配合后端发布，设置context
  deploy: [
    fis.plugin('skip-packed'), // 过滤掉已经被打包的资源.
    fis.plugin('local-deliver', {
         to: 'output'
    })
 ]
})
.match('*.{js,jsx,css,png}', { // 文件名加 md5
  useHash: true
})
.match('*.{js,jsx}', {
  optimizer: fis.plugin('uglify-js')  // js 压缩
})
.match('/modules/**.{js,jsx}', { // modules目录下的打包为app.js
  packTo: '/pkg/app.js'
})
.match('*.css', {
  optimizer: fis.plugin('clean-css'), // css 压缩
  packTo: "/pkg/all.css"   // 打包成一个 all.css
})
.match('*.png', {
  optimizer: fis.plugin('png-compressor'), // 图片压缩
  release: false   // 当前工程图片的用到了inline语法，这里设置为不发布
})

/**********生产环境打包策略 End*********************/
