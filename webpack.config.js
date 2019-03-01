const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AsyncChunkNames = require('webpack-async-chunk-names-plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.jsx',
  },
  output: {
    filename: '[name].bundle.[hash:8].js',
    chunkFilename: '[name].bundle.[hash:8].js',
    path: path.resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      sections: path.resolve(__dirname, 'src/sections/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      plugins: path.resolve(__dirname, 'src/plugins/'),
      routers: path.resolve(__dirname, 'src/routers/'),
      // test react new feature or concept
      testConcept: path.resolve(__dirname, 'src/testConcept/'),
      /* semantic ui custom theme */
      '../../theme.config': path.join(__dirname, 'public/semantic-ui/theme.config'),
    },
  },

  mode: process.env.NODE_ENV === 'prd' ? 'production' : 'development',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: [/\.scss$/, /\.sass$/],
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
        ],
      },

      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // creates style nodes from JS strings
          },
          {
            loader: 'less-loader', // translates CSS into CommonJS
          },
        ],
      },

      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
        loader: require.resolve('file-loader'),
        options: {
          name: '/static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './build'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    stats: 'errors-only', // slience terminal log
  },

  plugins: [
    // auto generage index.html base on template file and import xxx-bundle.js
    new HtmlWebpackPlugin({
      title: '三發丰悅 | 新北門牌桃園價，綠態建築好生活 | 官網',
      metaTitle: '三發丰悅 | 新北門牌桃園價，綠態建築好生活 | 官網',
      metaDescription: '三發丰悅：350米捷運鶯桃福德站，新北門牌桃園價，未來增值第一站，接待中心：新北市鶯歌區永和街 83 號，禮賓專線：02-86421155',
      metaKeywords: '三發丰悅,三發建設,鶯歌房屋,新北買房,鶯歌建案,台北買房',
      ogMetaTitle: '三發丰悅 | 新北門牌桃園價，綠態建築好生活 | 官網',
      ogMetaType: 'website',
      ogMetaDescription: '三發丰悅：350米捷運鶯桃福德站，新北門牌桃園價，未來增值第一站，接待中心：新北市鶯歌區永和街 83 號，禮賓專線：02-86421155',
      template: 'index.html',
      hash: true,
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'), // 將 production 加入了全局的環境變數之後，第三方函式庫或專案內代碼會根據 production 做打包優化的判斷
    }),
    new AsyncChunkNames(), // TODO: change ENV config
    new CopyPlugin([
      { from: './src/assets/img/favicon.png', to: 'static/media/favicon.png' },
    ]),
  ],

  /* 抽公共代碼用的 (防止重复)
   * Code Splitting 一般需要做这些事情：
   * https://zxc0328.github.io/2018/06/19/webpack-4-config-best-practices/
   * 为 Vendor 单独打包（Vendor 指第三方的库或者公共的基础组件，因为 Vendor 的变化比较少，单独打包利于缓存）
   * 为 Manifest （Webpack 的 Runtime 代码）单独打包
   * 为不同入口的公共业务代码打包（同理，也是为了缓存和加载速度）
   * 为异步加载的代码打一个公共的包
   */
  optimization: {
    splitChunks: {
      // minChunks: 2, // 在分割之前，这个代码块最小应该被引用的次数（译注：保证代码块复用性，默认配置的策略是不需要多次引用也可以被分割）
      name: true,
      chunks: 'all', // 代码块类型 必须三选一： "initial"（初始化） | "all"(默认就是all) | "async"（动态加载）
      // minSize: 30000, // 形成一个新代码块最小的体积

      /** 要切割成的每一个新chunk就是一个cache group
       * webpack根据下述条件自动进行代码块分割：
       * 新代码块可以被共享引用 or 这些模块都是来自node_modules文件夹里面
       * 新代码块大于30kb（min+gziped之前的体积）
       * 按需加载的代码块，最大数量应该小于或者等于5
       * 初始加载的代码块，最大数量应该小于或等于3
       */
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 打包優先度
        },
      },
    },
  },
}
