import babel from 'rollup-plugin-babel';
import ts from 'rollup-plugin-typescript2';
import pkg from './package.json';

const PLUGINS = [
  ts({
    tsconfigOverride: { exclude: ['**/*.test.ts'] },
  }),
  babel({
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  }),
];

const buildConfigs = [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: PLUGINS,
  },
];

// TODO: load only for prod build
buildConfigs.push({
  input: 'src/lazy.ts',
  output: [
    { file: 'dist/lazy.js', format: 'cjs' },
    { file: 'dist/lazy.esm.js', format: 'es' },
  ],
  plugins: PLUGINS,
});

export default buildConfigs;
