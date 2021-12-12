import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/es/index.js', format: 'es',
    },
    plugins: [
      typescript(),
      babel({ extensions: ['.ts'] }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/umd/index.min.js',
      format: 'umd',
      name: 'standard',
      indent: false,
    },
    plugins: [
      typescript(),
      babel({ extensions: ['.ts'], exclude: 'node_modules/**' }),
      terser(),
    ],
  },
]
