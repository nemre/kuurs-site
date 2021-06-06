import express from 'express'
import render from 'preact-render-to-string'
import Courses from './pages/courses'
import path from 'path'

var app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  res.send('<!doctype html>' + render(<Courses />))
})

app.listen(process.env.PORT || 80, function () {
  console.log('\x1Bc')
  console.log('Kuurs is started. Yay!')
})
