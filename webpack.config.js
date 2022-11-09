const path = require("path");
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WebpackBar = require("webpackbar");

module.exports = {
	context: __dirname,
	entry: "./app.js",
	output: {
		path: path.join(__dirname, "docs"),
		filename: "app.js",
	},
	optimization: {
		minimizer: [new TerserPlugin(), new CSSMinimizerPlugin({})],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|xlsx)$/,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						// outputPath: 'img/'
					}
				}]
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			favicon: "favicon.png",
			template: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "app.css",
		}),
		new WebpackBar(),
	],
};
