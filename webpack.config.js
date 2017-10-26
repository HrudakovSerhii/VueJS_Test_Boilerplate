const PATH = require('path');

var resolve = function(path) {
	return PATH.resolve(__dirname, path); // This structure used because of directory of this file (its in config folder)
};

module.exports = {
	devtool: 'source-map',
	context: resolve('./src/'),
	entry: {
		app: resolve('src/main.js')
	},
	output: {
		filename: '[name].bundle.js',
		path: resolve('./dist'),
		publicPath: '/assets/'
	},
	devServer: {
		contentBase: resolve('./src')
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
			SmartComponents: resolve('src/js/components'),
			Components: resolve('src/components'),
			Code:  		resolve('src/js'),
			Styles:		resolve('src/css'),
			Templates:  resolve('src/templates'),
			Images: 	resolve('public/assets'),
			Utility:	resolve('utils')
		},
		extensions: ['.js', '.jsx', '.vue']
	},
	module: {
		loaders: [
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
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
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
			}
		]
	}
}
