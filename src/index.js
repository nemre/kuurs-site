import path from 'path'

var app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  res.send(render(<Row>Hello</Row>))
})

app.listen(process.env.PORT || 80, () => {
  console.log('\x1Bc')
  console.log('Kuurs is started. Yay!')
})
