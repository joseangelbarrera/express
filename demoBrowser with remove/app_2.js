const express = require('express')
// npm install express-session --save
// npm install session-file-store --save
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const app = express()

const PORT = 3000



// we apply a middleware:

app.set('views engine', 'pug')

app.use(session({
  name: 'jm-server-session-cookie-id',
  secret: '4u6mVaJtJrrhZb2iHx2ugBof',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}));

// the data we passed are in the documentation
// 'name': name of the cookie (as you decide) but is the name was to be writen into the browser
// secret': the text you decide to conect with the client
// (this is the password to undeciript the message the coookie contains) 
// store: if i did not indicate a place it will be in memory
// but best idea is to save in a space

// we hace this: req.session

// app.use((req, res, next) => {
// console.log(req.session)
// next()
// })

app.use((req, res, next) => {
	req.session.counter = ++req.session.counter || 1
next()
})

app.get('/cart', (req, res) => {
	res.render('cart')
})

app.post('/cart', (req, res) => {
res.send(req.body)
})

// app.get('/', (req, res) => {
// 	res.send(`You have visited this site this times:  ${req.session.counter}`)
// })

app.listen(PORT)
console.log(`listening on PORT ${PORT}`)
