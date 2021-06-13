import Articles from './pages/articles/index.js'
import Courses from './pages/courses/index.js'
import Questions from './pages/questions/index.js'
import Shop from './pages/shop/index.js'
import Tools from './pages/tools/index.js'
import express from 'express'
import path from 'path'
import render from 'preact-render-to-string'

var app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  res.send('<!doctype html>' + render(<Courses />))
})

app.get('/araclar', (req, res) => {
  res.send('<!doctype html>' + render(<Tools />))
})

app.get('/magaza', (req, res) => {
  res.send('<!doctype html>' + render(<Shop />))
})

app.get('/makaleler', (req, res) => {
  res.send('<!doctype html>' + render(<Articles />))
})

app.get('/sorular', (req, res) => {
  res.send('<!doctype html>' + render(<Questions />))
})

app.listen(process.env.PORT || 80, function () {
  console.log('\x1Bc')
  console.log('Kuurs is started. Yay!')
})
