const PATH = require('path');
const WEBPACK = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devMode = process.env.NODE_ENV !== 'production';

var resolve = function(path) {
	return PATH.resolve(__dirname, path);
};

module.exports = {
	devtool: 'source-map',
	context: resolve('./src/'),
	entry: {
		app: resolve('src/main.js')
	},
    output: {
    	filename: '[name].bundle.js',
		path: resolve('./public'),
		publicPath: '/assets/'
	},
	devServer: {
		contentBase: resolve('./src'),
		hot: true
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
		new WEBPACK.HotModuleReplacementPlugin(),
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
			Components: resolve('src/js/components'),
			Code:  		resolve('src/js'),
			Styles:		resolve('src/css'),
			Templates:  resolve('src/templates'),
			Images: 	resolve('public/assets'),
			Utility:    resolve('utils')
		},
		extensions: ['.js','.vue']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env']
					}
				}
			},
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
					options: {
						'css': 'vue-style-loader!css-loader',
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					}
				}
			},
			{
				test: /\.s?[ac]ss$/,
				use: devMode ?
					[{
						loader: 'style-loader',
						options: {
							hmr: true
						},
					},"css-loader","sass-loader"] :
					[
					 	MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
					]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}
				]
			},
			{
				test: /\.(ttf|eot|svg|gif|jpg|png|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'assets/[name]-[hash].[ext]'
						},
					},
				],
				include: resolve('./public/')
			}
		]
	}
};



