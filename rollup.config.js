import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss'
import run from '@rollup/plugin-run'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
    del({ targets: 'dist/*' }),
    copy({
      targets: [{ dest: 'dist', src: 'src/static' }],
    }),
    postcss({
      extract: 'static/index.css',
      modules: true,
    }),
    process.env.ROLLUP_WATCH && run(),
  ],
}
