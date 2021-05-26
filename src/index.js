import path from 'path'

var app = express()

//app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  res.send(ip)
  //res.send('<!doctype html>' + render(<Home />))
})

app.listen(process.env.PORT || 80, () => {
  console.log('\x1Bc')
  console.log('Kuurs is started. Yay!')
})
