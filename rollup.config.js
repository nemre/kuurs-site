import run from '@rollup/plugin-run'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js'
  },
  plugins: process.env.ROLLUP_WATCH && run()
}
