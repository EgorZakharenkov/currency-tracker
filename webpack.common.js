import { join, resolve } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

export default {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
};
