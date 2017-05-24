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
  req.session.cart = req.session.cart || []
  next()
})

app.get('/cart', (req, res) => {
  res.render('cart', { cart: req.session.cart })
})

app.post('/cart', (req, res) => {
  req.session.cart.push(req.body)
  res.render('cart', { cart: req.session.cart })
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))

