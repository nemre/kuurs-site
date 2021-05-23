import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import run from '@rollup/plugin-run'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    del({ targets: 'dist/*' }),
    babel({
      babelHelpers: 'bundled'
    }),
    copy({
      targets: [{ src: 'src/static', dest: 'dist' }]
    }),
    process.env.ROLLUP_WATCH && run()
  ]
}
