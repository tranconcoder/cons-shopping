const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');

const TS_FOLDER_PATH = './src/assets/ts';

const filesName = fs.readdirSync(TS_FOLDER_PATH);
const foldersName = filesName
	.map((file) => path.join(TS_FOLDER_PATH, file))
	.filter((path) => fs.statSync(path).isDirectory())
	.map((path) => path.split('/').at(-1));

function getEntries() {
	const result = {};

	foldersName.forEach((folderName) => {
		result[folderName] = `${TS_FOLDER_PATH}/${folderName}/index.ts`;
	});

	return result;
}

module.exports = {
	mode: 'production',
	watch: true,
	watchOptions: {
		ignored: /node_modules/,
	},
	entry: getEntries(),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './src/assets/js'),
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.d.ts'],
	},
	plugins: [new CleanWebpackPlugin()],
};
