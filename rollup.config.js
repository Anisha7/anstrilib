import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'index.js',
    plugins: [terser()],
    output: {
      file: 'umd/anstrilib.js',
      format: 'umd',
      name: 'anstrilib',
      esModule: false,
    },
  },
  {
    input: 'index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm',
    },
  },
];
