const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const FileStore = require('session-file-store')(session)

const products = require('./data/products.json')

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use(session({
    name: 'jm-server-session-cookie-id',
    secret: '4u6mVaJtJrrhZb2iHx2ugBof',
    saveUninitialized: true,
    resave: true,
    store: new FileStore()

}))

app.use((req, res, next) => {
    req.session.cart = req.session.cart ||  []
    next()
        // console.log(req) returns all the spectre
})

app.get('/cart', (req, res) => {
  const cart = req.session.cart
  console.log('cart' + cart)
  const detailedCart = cart.map( cartItem => {
    let aProductsIdFiltered = products.filter( item => cartItem.id === item.id )
    let detailsProduct = aProductsIdFiltered[0]
    console.log('test' + detailsProduct)
    detailsProduct.quantity = cartItem.quantity
    return detailsProduct
  } )

  if (detailedCart.length) {
    res.render('cart/index', { cart: detailedCart })
  } else {
    res.render('cart/empty')
  }
})


app.get('/', (req, res) => {
    const cart = req.session.cart
    res.render('list/index', { products, cart })

})

app.post('/cart-native', (req, res) => {
    const { id, quantity } = req.body
    req.session.cart.push({ color, quantity })
    res.redirect('/')
})

app.post('/cart-ajax', (req, res) => {
    const { id, quantity } = req.body
    req.session.cart.push({ id, quantity })
    res.status(200).send(`${quantity} items w/ ID: ${id} were added to the cart`)
})

app.delete('/cart/:id', (req, res) => {
    const id = req.params.id
    console.log('id' + id)
    const originalSize = req.session.cart.length
    req.session.cart = req.session.cart.filter(item => {
        return item.id !== id
    })
    if (originalSize === req.session.cart.length) {
        res.status(500).send(`Item w/ ID: ${id} was not removed from the cart`)
    } else {
        res.status(200).send(`Item w/ ID: ${id} was removed succesfully`)
    }
})

app.put('/cart/:id', (req, res) => {
    const id = req.params.id
    const quantity = req.body.quantity
    req.session.cart = req.session.cart.map(item => {
        if (item.id === id) {
            item.quantity = quantity
        }
        return item
    })
    res.status(200).send(`Items w/ ID: ${id} was succesfully updated`)
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
