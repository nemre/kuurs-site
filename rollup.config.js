import babel from '@rollup/plugin-babel'
import run from '@rollup/plugin-run'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    process.env.ROLLUP_WATCH && run()
  ]
}
