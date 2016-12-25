var path 				= require('path');
var webpack 			= require('webpack');
var browserSync			= require('browser-sync');
var ExtractTextPlugin 	= require('extract-text-webpack-plugin');

let config = {
	server: {
		baseDir: "./",
		index: 'index.html'
	},
	files: ['./**/*.js', './**/*.css', './**/*.jsx', './index.html'],
	host: 'localhost',
	port: 3000
}

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
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
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
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		() => browserSync(config)
	]
}