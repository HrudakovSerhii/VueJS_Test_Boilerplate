const PATH = require('path');
const WEBPACK = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

var resolve = function(path) {
	return PATH.resolve(__dirname, '..', path); // This structure used because of directory of this file (its in config folder)
}

module.exports = {
	devtool: "source-map",
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
			    test: /\.(png|gif|jpg|svg)$/,
			    include: resolve('public/assets'),
			    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
			},
			{
				test: /\.css$/,
        		use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(sass|scss)$/,
		        use: [
		          'style-loader',
		          'css-loader',
		          'sass-loader'
		        ]
			}
		]
	},
	plugins: [
    	new ExtractTextPlugin({
    		filename: '[name].bundle.css',
      		allChunks: true,
    	})
  	]
}



