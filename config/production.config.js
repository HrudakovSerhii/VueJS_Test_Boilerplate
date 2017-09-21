const CONFIG = {
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					'style',
					`css!sass?sourceMap&includePaths[]=${bourbonPath}&includePaths[]=${neatPath}`, 
					{
						publicPath: '',
					}
				),
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].css'),
	],
}