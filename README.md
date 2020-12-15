# Read.concat
阅读项目

## 项目搭建步骤 (本项目使用sass)
  1. npm init ---项目初始化
  2. npm i webpack webpack-cli --save-dev  (如果不装 webpack-cli 是无法在命令行里使用 webpack 的)
  3. npm install clean-webpack-plugin --save-dev (删除上次打包生成的文件)
  ### 用 Babel 7 转译 ES6
  4. npm i @babel/core babel-loader @babel/preset-env @babeplugin-transform-runtime --save-dev (处理es6语法转换)
    1. @babel/core
    2. @babel/preset-env: 包含 ES6、7 等版本的语法转化规则
    3. @babel/plugin-transform-runtime: 避免 polyfill 污染全局变量，减小打包体积
    4. @babel/polyfill: ES6 内置方法和函数转化垫片
    5. babel-loader: 负责 ES6 语法转化

  5. npm i @babel/polyfill @babel/runtime
     > 在项目的根目录中创建名为 .babelrc 的新文件来配置 Babel:
        ```
         {
            "presets": ["@babel/preset-env"],
            "plugins": ["@babel/plugin-transform-runtime"]
          } 
        ```
  6. npm install --save core-js@3 (useBuiltIns对@babel/polyfill 按需引入)    
    > 
    ```
    {
        "presets": [
        [
            "@babel/preset-env",
            {
            "useBuiltIns": "usage",
            "corejs": 3
            }
        ]
        ],
        "plugins": ["@babel/plugin-transform-runtime"]
        }
    ```

  ##  Code Splitting    
 7. 在 webpack4 之前是使用 commonsChunkPlugin 来拆分公共代码，v4 之后被废弃，并使用 splitChunksPlugins
 ```
   optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }

 ```

 # 自动生成 HTML 文件

 8. npm i html-webpack-plugin html-loader --save-dev
 
 # 处理 CSS/SCSS 文件

 9. npm i css-loader style-loader --save-dev

 10. npm i mini-css-extract-plugin --save-dev (分理出css文件)

 11. npm i node-sass sass-loader --save-dev (处理scss文件)

 12. npm install optimize-css-assets-webpack-plugin --save-dev （css文件压缩）

 13. npm install postcss-loader autoprefixer --save-dev （为 CSS 加上浏览器前缀）


## JS Tree Shaking  （删除js中没有被引用的代码模块，JS 的 Tree Shaking 依赖的是 ES6 的模块系统（比如：import 和 export）

14. 字面意思是摇树，项目中没有使用的代码会在打包的时候丢掉。JS 的 Tree Shaking 依赖的是 ES6 的模块系统（比如：import 和 export） ,(按需要引入js模块) 安装相对应的es模块，例如lodash相对应的模块为：lodash-es

## CSS Tree Shaking

14. npm i glob-all purify-css purifycss-webpack --save-dev  (glob-all 的作用就是帮助 PurifyCSS 进行路径处理，定位要做 Tree Shaking 的路径文件。)

15. npm install url-loader file-loader --save-dev 图片处理和 base64 编码 
> url-loader 依赖 file-loader，url-loader 可以看作是增强版的 file-loader

# 图片压缩
16. npm i image-webpack-loader --save-dev

# 生成雪碧图
17. npm i postcss-loader postcss-sprites --save-dev (雪碧图要配合 css 代码进行定制化使用。要通过 css 代码在雪碧图上精准定位需要的图片)

# 字体文件处理
18. 配置loadder即可

# 开发模式与 webpack-dev-server
19. npm i webpack-dev-server --save-dev

### 用 Babel 7 转译 ES6
  ```
    {
      "presets": ["@babel/preset-env"],
      "plugins": ["@babel/plugin-transform-runtime"]
    } 
  ```




