const path = require('path')

module.exports = {
  plugins: [
    [
      'auto-import',
      {
        declarations: [
          {
            default: 'Row',
            path: path.resolve(__dirname, 'src/components/Row.jsx')
          }
        ]
      }
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: 'preact'
      }
    ]
  ]
}
