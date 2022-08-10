const path = require("path");

// mode type
const mode = process.env.NODE_ENV || 'development',
  devMode = mode === 'development',
  target = devMode ? 'web' : 'browserslist',
  devtool = devMode ? 'source-map' : undefined

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin')

// optimization func
const optimization = () => {
  return {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  }
}


module.exports = {
  mode, target, devtool,

  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/scripts', 'index.js')],

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: !devMode
      }
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })

  ],

  optimization: !devMode ? optimization() : undefined,

  module: {
    rules: [
      // html
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // styles
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')]
              }
            }
          },
          'sass-loader',
        ],
      },
      // images
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 100,
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ],
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      // babel js
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
}