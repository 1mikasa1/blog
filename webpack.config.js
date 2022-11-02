const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log('当前环境：', process.env.NODE_ENV)
module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'blog_front'),
    publicPath:'./',
    clean: true,
  },
  resolve:{
    alias: {
      "@": path.join(__dirname,"src"), // 目录快捷方式配置
    },
    extensions:['.tsx','.ts', '.js', '.jsx', '.json'] //以上文件引入可以省略后缀名,解析顺序从左往右，如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use:[
          {
            loader:'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react']
              ]
            }
          },
          {
            loader:'ts-loader',
            options:{
              transpileOnly: true
            }
          }
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:[
          {
            loader:'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react']
              ]
            }
          }
        ],
      },
      {
        test: /\.(js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react']
            ],
            filename:'js/[hash][ext]',
          }
        }
      },
      {
        test:/\.(module\.)?less$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader:'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/inline',
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/static/index.html',
    }),
    new MiniCssExtractPlugin({
      // 同步加载生成的文件名
      filename:'css/[name].css',
      // 异步加载生成的文件名
      chunkFilename:'css/[id].css',
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'blog_front'),
    },
    historyApiFallback: {
      rewrites: [
        { from:/^\s+/, to:'/' } //通过搜索框查路由时，需要转发到index下，然后index下的react实例来找到对应路由进行更新页面
      ]
    },
    port: 3233,
  }
}