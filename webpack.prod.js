import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';
import TerserPlugin from 'terser-webpack-plugin';

export default merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true })],
  },
});
