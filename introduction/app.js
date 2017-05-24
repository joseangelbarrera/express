const express = require('express')
const bodyParse = require('body-parser')
const fs() = requiere('fs')

const app = express() //instancio y creo un objeto
const PORT = 3000
const OUTPUT = 'data.txt'


let aNames = []

// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }))
er = bodyParser.urlencoded({ extended: false })
 

app.use( express.static('public'))
app.set('view engine', 'pug')


app.get('/helllo', (req, res) => {
	res.send('hello you')
})

app.post('/contact', (req, res) => {
	cnst userName = req,body
})

app.const('contact')
fs.writefile('filename')


//

// my notes




// CREATE A JASON
// names = [name, 1, name, 2, name3]
// JSON.stringfy[names]

// this is the way to convert a array into a jason






app.listen(PORT, () => console.log(`🖖 Magic  happens on PORT ${PORT}...`))

