const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 将 css 单独打包成文件


const entryDir = path.resolve(__dirname,'../src');
const outputDir = path.resolve(__dirname, '../dist');

module.exports = {
    // mode: 'development',
    devtool: "cheap-module-eval-source-map",
    entry: path.resolve(entryDir,'index.js'),
    output: {
        path: outputDir,
        filename: '[name].bundle.js', // 代码打包后的文件名
        chunkFilename: '[name].js' // 代码拆分后的文件名
    },
    resolve: {
      // 后缀自动补全
      extensions: ['.js', '.vue'],
      alias: {
        // vue官网有说明      
        'vue$': 'vue/dist/vue.esm.js',
        'vue': 'vue/dist/vue.esm.js',
        // 定义@符号来指代src目录
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
        new CleanWebpackPlugin(), // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
        new HtmlWebpackPlugin({
            // 打包输出HTML
            title: '自动生成 HTML',
            filename: 'index.html', // 生成后的文件名
            template: path.resolve(entryDir,'index.html'), // 根据此模版生成 HTML 文件
            minify: {
              // 压缩 HTML 文件
              removeComments: true, // 移除 HTML 中的注释
              collapseWhitespace: true, // 删除空白符与换行符
              minifyCSS: true // 压缩内联 css
            }
           
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.ProvidePlugin({                
            '$': "jquery",               
            'jQuery': "jquery", 
            'window.jQuery': 'jquery'               
        })      
    ],
    module: {
        rules: [
          {
            test: /\.js$/, // 使用正则来匹配 js 文件
            exclude: /node_modules/, // 排除依赖包文件夹
            use: {
              loader: 'babel-loader' // 使用 babel-loader
            }
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [               
                {
                   loader: MiniCssExtractPlugin.loader
                },   
                {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 2  //在一个 css 中引入了另一个 css，也会执行之前两个 loader，即 postcss-loader 和 sass-loader
                    }
                },
                'postcss-loader', // 使用 postcss 为 css 加上浏览器前缀
                'sass-loader',
            ],
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[name]-[hash:5].[ext]',
                  outputPath: 'static/images', //输出到 images 文件夹
                  limit: 20000 //把小于 20kb 的文件转成 Base64 的格式
                }
              }
            ]
          },
          {
            test: /\.(eot|woff2?|ttf|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[name]-[hash:5].min.[ext]',
                  limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                  publicPath: 'fonts/',
                  outputPath: 'static/fonts/'
                }
              }
            ]
          },
          {
            test: require.resolve('jquery'),
            use: {
              loader: 'expose-loader',
              options: '$'
            }
          }
        ]
      }
      
};