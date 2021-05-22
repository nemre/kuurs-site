module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        //throwIfNamespace: false, // defaults to true
        runtime: 'automatic', // defaults to classic
        importSource: 'preact' // defaults to react
      }
    ]
  ]
}
