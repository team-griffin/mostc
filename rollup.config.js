import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-node-resolve';
const typescript = require('rollup-plugin-typescript2');
import path from 'path';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/es/mostc.js',
      format: 'es',
    },
    {
      file: 'dist/cjs/mostc.js',
      format: 'cjs',
    },
  ],
  plugins: [
    localResolve(),
    typescript({
      tsconfig: path.resolve('./tsconfig.json'),
      tsconfigOverride: {
        compilerOptions: {
          module: 'ES2015',
        },
      },
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: [ '.js', '.ts' ],
    }),
  ],
  external: [
    'ramda',
    'most',
  ],
};
