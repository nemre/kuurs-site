module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      { importSource: 'preact', runtime: 'automatic' },
    ],
  ],
}
