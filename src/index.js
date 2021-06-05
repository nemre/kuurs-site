import http from 'http'
import render from 'preact-render-to-string'
import Home from './pages/home'

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(render(<Home />))
    res.end()
  })
  .listen(80)

console.log('\x1Bc')
console.log('Kuurs is started. Yay!')
