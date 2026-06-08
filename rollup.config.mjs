import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

// noinspection JSUnusedGlobalSymbols
export default {
  input: 'src/index.js',
  output: {
    esModule: true,
    file: 'dist/index.js',
    format: 'esm',
    inlineDynamicImports: true,
  },
  plugins: [commonjs(), nodeResolve({ preferBuiltins: true })],
}
