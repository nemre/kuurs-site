const path = require('path')

module.exports = {
  plugins: [
    [
      'auto-import',
      {
        declarations: [
          {
            default: 'Home',
            path: path.resolve(__dirname, 'src/pages/Home.jsx')
          },
          {
            default: 'classNames',
            path: 'classnames'
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
