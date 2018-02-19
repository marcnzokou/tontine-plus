const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = process.env.PORT || 4000;
const outputPath = path.join(__dirname, 'dist')

module.exports = {
	context: __dirname,
	entry: './src/index.js',
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
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
					  loader: 'url-loader',
					  options: {
						limit: 8192,
						name: '[name].[hash:7].[ext]'
					  }
					}
				  ]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
	],
	devtool: 'source-map',
	devServer: {
		port,
		hot: true,
		historyApiFallback: true,
		publicPath: '/dist/',
	}
};