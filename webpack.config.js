const path = require('path');

module.exports = {
	entry: './src/index.js',
	externals: [
		{
			react: {
				amd: 'react',
				commonjs: 'react',
				commonjs2: 'react',
				root: 'React',
			},
		},
	],
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	output: {
		filename: 'dist/index.js',
		library: 'mc-icons',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, '.'),
		umdNamedDefine: true,
	},
	resolve: {
		alias: {
			react: path.resolve(__dirname, './node_modules/react'),
			'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
		},
	},
};
