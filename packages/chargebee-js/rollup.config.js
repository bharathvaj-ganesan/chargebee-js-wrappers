import babel from 'rollup-plugin-babel';
import ts from 'rollup-plugin-typescript2';
import pkg from './package.json';

const banner = require('./build/banner-comment');

const esmBanner = banner('ES Module')
const commonJSBanner = banner('Common JS')

const PLUGINS = [
  ts({
    tsconfigOverride: { exclude: ['**/*.test.ts'] },
  }),
  babel({
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  })
];

const buildConfigs = [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs', banner: commonJSBanner },
      { file: pkg.module, format: 'esm', banner: esmBanner },
    ],
    plugins: PLUGINS,
  },
];

buildConfigs.push({
  input: 'src/lazy.ts',
  output: [
    { file: 'dist/chargebee.lazy.js', format: 'cjs', banner: commonJSBanner },
    { file: 'dist/chargebee.lazy.esm.js', format: 'esm', banner: esmBanner },
  ],
  plugins: PLUGINS,
});

export default buildConfigs;
