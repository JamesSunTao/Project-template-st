# Read.concat
阅读项目

## 项目搭建步骤
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



