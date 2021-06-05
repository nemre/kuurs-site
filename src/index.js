import express from 'express'
import render from 'preact-render-to-string'
import Home from './pages/home'
import path from 'path'

var app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  res.send('<!doctype html>' + render(<Home />))
})

app.listen(process.env.PORT || 80, function () {
  console.log('\x1Bc')
  console.log('Kuurs is started. Yay!')
})
