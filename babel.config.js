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
          },
          {
            default: 'render',
            path: 'preact-render-to-string'
          },
          {
            default: 'express',
            path: 'express'
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
