import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import run from '@rollup/plugin-run'

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled'
    }),
    del({ targets: 'dist/*' }),
    copy({
      targets: [{ src: 'src/static', dest: 'dist' }]
    }),
    process.env.ROLLUP_WATCH && run()
  ]
}
