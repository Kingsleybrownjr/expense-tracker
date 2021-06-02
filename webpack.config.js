const path = require('path');

module.exports = {
	entry: {
		index: ['babel-polyfill', './src/index.js'],
	},
	output: {
		path: path.resolve(__dirname, 'dist/scripts'),
		filename: '[name]-bundle.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/scripts/',
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
