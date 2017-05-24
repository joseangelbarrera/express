const express = require("express") // calling express
const app = express()  // defining the function -- the instance
const PORT = 3000  // choosing a PORT (always uppercase)




// by default the engine of render is 'pug'

app.set("view engine", "pug") // defining dependencies
app.use(express.static("public"))

// indicating routes to server
// we want to locate in this place the statics documents
// for that reason the html files must be into this folder

//root directory

// app.get('/', (req, res) => {
//     res.render('index')
// })

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there friend!', h2: 'oh no', me: 'esto me suena mucho' })
})


// app.get('/about', (req, res) => {
//     res.render('about')
// })

// app.get('/about', (req, res) => {
//     res.render('about')
// })


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })


// rex is a method to call an answer, in this case 'index'
// render could have two arguments, the second is an odject
// const title = 'My Super Project'
//    res.render('index', { title })
// we can do with express almost the same that with AngularJS

app.listen(PORT, () => console.log('listening port 3000'))
