const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const FileStore = require('session-file-store')(session)
// Session file store is a provision for storing session data in the session file

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))

// return a mkddleware

app.set('view engine', 'pug')

// con el res.render se convierte de modo que se pueda ver


// esta es una función middleware qeu va a manejar una sesión
// si no existe da la orden para que la cree

app.use(session({
  name: 'jm-server-session-cookie-id',
  secret: '4u6mVaJtJrrhZb2iHx2ugBof',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}))

app.use((req, res, next) => {
  req.session.cart = req.session.cart || []
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



