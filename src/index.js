import express from 'express'
import render from 'preact-render-to-string'

var app = express()

app.get('/', (req, res) => {
  res.send(render(<h1>Hello</h1>))
})

app.listen(process.env.PORT || 80, () => {
  console.log('\x1Bc')
  console.log('Kuurs is started. Yay!')
})
