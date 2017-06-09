const PATH = require('path');
const WEBPACK = require('webpack');

var resolve = function(path) {
	return PATH.resolve(__dirname, '..', path); // This structure used because of directory of this file (its in config folder)
}

module.exports = {
	context: resolve('./src'),
	entry: {
		app: resolve('src/js/app.js')
	},
    output: {
    	filename: '[name].bundle.js',
		path: resolve('./dist/assets'),
		publicPath: resolve('/assets'),
	},
	devServer: {
		contentBase: resolve('./src')
	},
	resolve: {
		alias: {
			Components: resolve('src/js/components'),
			Styles:		resolve('src/css'),
			Images: 	resolve('public/assets'),
			Utility:    resolve('utils')
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	}
}