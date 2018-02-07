const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = process.env.PORT || 4000;
const outputPath = path.join(__dirname, 'dist')

module.exports = {
	context: __dirname,
	entry: './src/index.jsx',
	output: {
		path: outputPath,
		filename: 'bundle.js',
	},
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader!sass-loader'
				}),
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			minimize: true,
			sourceMap: true
		}),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
	],
	devtool: 'source-map',
	devServer: {
		port,
		compress: true,
		historyApiFallback: true,
		publicPath: '/dist/',
	}
}