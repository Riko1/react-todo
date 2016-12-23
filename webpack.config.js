var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './js/index.js',
	output: {
		path: './js/app',
		filename: 'app.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract( 'style-loader!css-loader' )
			},
			{
				test: /\.jsx?$/,
				excludes: /node_modules/,
				loader: 'babel'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('./css/style.css'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			React: 'react',
			ReactDOM: 'react-dom'
		})
	]
}