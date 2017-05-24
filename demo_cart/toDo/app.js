const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const FileStore = require('session-file-store')(session)

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'pug')

app.use(session({
  name: 'jm-server-session-cookie-id',
  secret: '4u6mVaJtJrrhZb2iHx2ugBof',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}))

app.use((req, res, next) => {
  req.session.todo = req.session.todo || []
  next()
})

app.get('/todo', (req, res) => {
  res.render('todo', { todo: req.session.todo })
})

app.post('/todo', (req, res) => {
  req.session.todo.push(req.body)
  res.render('todo', { todo: req.session.todo })
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))

