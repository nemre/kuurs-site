import express from 'express'
import path from 'path'
import render from 'preact-render-to-string'
import * as Pages from './pages'

const courses = [
  {
    name: 'Svelte',
    slug: 'svelte',
    color: '#ff3e00',
    url: 'svelte-kursu'
  },
  {
    name: 'React',
    slug: 'react',
    color: '#61dafb',
    url: 'react-kursu'
  },
  {
    name: 'Angular',
    slug: 'angular',
    color: '#dd0031',
    url: 'angular-kursu'
  },
  {
    name: 'Vue',
    slug: 'vue',
    color: '#4fc08d',
    url: 'vue-kursu'
  },
  {
    name: 'Discord',
    slug: 'discord',
    color: '#7289da',
    url: 'discord-kursu'
  },
  {
    name: 'Slack',
    slug: 'slack',
    color: '#4a154b',
    url: 'slack-kursu'
  },
  {
    name: 'Ember',
    slug: 'ember',
    color: '#e04e39',
    url: 'ember-kursu'
  },
  {
    name: 'Framer',
    slug: 'framer',
    color: '#05f',
    url: 'framer-kursu'
  },
  {
    name: 'Figma',
    slug: 'figma',
    color: '#f24e1e',
    url: 'figma-kursu'
  },
  {
    name: 'YouTube',
    slug: 'youtube',
    color: '#f00',
    url: 'youtube-kursu'
  },
  {
    name: 'Excel',
    slug: 'excel',
    color: '#217346',
    url: 'excel-kursu'
  }
]
var app = express()

app.use(function (req, res, next) {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if (!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if (!(username === 'emreonal' && password === '114350375')) {
    return reject()
  }

  next()
})

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  res.send('<!doctype html>' + render(<Pages.Home courses={courses} />))
})

app.listen(process.env.PORT || 80, () => {
  console.log('\x1Bc')
  console.log('Kuurs is started. Yay!')
})
