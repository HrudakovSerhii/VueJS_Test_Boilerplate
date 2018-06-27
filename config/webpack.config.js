const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var resolve = function (path) {
	return Path.resolve(__dirname, '..', path); // This structure used because of directory of this file (its in config folder)
};

module.exports = {
    devtool: 'source-map', //'cheap-module-eval-source-map', // use 'cheap-source-map' for prod TODO
    context: resolve('./src/'),
    entry: {
        app: [
            resolve('src/js/main.js'),
            resolve('src/css/main.scss')
        ]
	},
	devServer: {
		contentBase: resolve('./src')
	},
	output: {
		filename: '[name].js',
		publicPath: 'assets/',
		path: resolve('dist/assets')
	},
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
		extensions: ['.js', '.jsx', '.css', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
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
				test: /\.(png|gif|jpg|svg)$/,
				use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
				include: resolve('public/assets')
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					use: "css-loader"
				})
			},
			{
				test: /\.(sass|scss)$/,
				exclude: /(node_modules)/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!sass-loader',
					publicPath: "../dist/"
				})
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
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	]
};



