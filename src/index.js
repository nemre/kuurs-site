import render from 'preact-render-to-string'
import express from 'express'
var app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(render(<h1>Hello</h1>))
})

app.listen(port, () => {
  console.log(`Kuurs listening at http://localhost:${port}`)
})
