var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './js/index.js',
	output: {
		path: path.join(__dirname, 'js', '/', 'app'),
		filename: 'app.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: './libs/bootstrap/fonts',
				loader: ExtractTextPlugin.extract( 'style!css' )
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
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
			jQuery: 'jquery',
			React: 'react',
			ReactDOM: 'react-dom'
		})
	]
}