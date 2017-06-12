const PATH = require('path');
const WEBPACK = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

var resolve = function(path) {
	return PATH.resolve(__dirname, '..', path); // This structure used because of directory of this file (its in config folder)
}

module.exports = {
	devtool: 'source-map',
	context: resolve('./src'),
	entry: {
		app: resolve('src/main.js')
	},
    output: {
    	filename: '[name].bundle.js',
		path: resolve('./public'),
		publicPath: '/assets/'
	},
	devServer: {
		contentBase: resolve('./src')
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
			Components: resolve('src/js/components'),
			Styles:		resolve('src/css'),
			Code:  		resolve('src/js'),
			Images: 	resolve('public/assets'),
			Utility:    resolve('utils')
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
			}
			// {
			// 	test: /\.css$/,
			// 	use: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
		 //        	use: 'css-loader'
		 //        })
			// },
			// {
		 //        test: /\.(sass|scss)$/,
		 //        use: ExtractTextPlugin.extract({
			//     	fallback: 'style-loader',
			//     	use: 'css-loader!sass-loader',
			// 	}),
	  //     	}
		]
	}
}



