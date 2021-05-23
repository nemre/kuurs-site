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
          },
          {
            default: 'styles',
            path: path.resolve(__dirname, 'src/assets/index.css')
          },
          {
            default: 'Home',
            path: path.resolve(__dirname, 'src/pages/Home.jsx')
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
