var path = require('path')
// var SpritesmithPlugin = require('webpack-spritesmith'); // 处理雪碧图
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    //  生成雪碧图插件
    // new SpritesmithPlugin({
    //   src: {
    //     cwd: path.resolve(__dirname, '../src/design/myicon'),
    //     glob: '*.png'
    //   },
    //   target: {
    //     image: path.resolve(__dirname, '../src/image/sprite.png'),
    //     // css: path.resolve(__dirname, 'src/assets/sprite.css')
    //     css: [[
    //       path.resolve(__dirname, '../src/scss/_sprite.scss'),
    //       { format: 'custom_template' }
    //     ]]
    //   },
    //   apiOptions: {
    //     cssImageRef: '../image/sprite.png'
    //   },
    //   spritesmithOptions: {
    //     algorithm: 'binary-tree'
    //   },
    //   customTemplates: {
    //     'custom_template': function (data) {
    //       var shared = [
    //         '[class^="myicon-"], [class*=" myicon-"] {',
    //         // '  display: inline-block;',
    //         // '  vertical-align: middle;',
    //         '  background-image: url(I);',
    //         '}'].join("")
    //         .replace('I', data.sprites[0].image);
    //
    //       var perSprite = data.sprites.map(function (sprite) {
    //         return '.myicon-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
    //             .replace('N', sprite.name)
    //             .replace('W', sprite.width)
    //             .replace('H', sprite.height)
    //             .replace('X', sprite.offset_x)
    //             .replace('Y', sprite.offset_y);
    //       }).join('\n');
    //
    //       return shared + '\n' + perSprite;
    //     }
    //   }
    // }),
  ],
}
