const PATH = require('path');
const WEBPACK = require('webpack');

var resolve = function(path) {
	return PATH.resolve(__dirname, '..', path);
}

module.exports = {
	context: resolve('./src'),
	entry: {
		app: resolve('app/app.js')
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
			Components: resolve('app/components'),
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
			}
		]
	}
}