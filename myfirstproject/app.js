const express = require('express')

const app = express()


// app.METHOD(PATH, HANDLER)

// Where:

// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.



// To use statis:
// app.use(express.static(('public'))


app.get('/', (req, res) => {
    res.send('Main Page!')
})

app.post('/', (req, res) => {
    res.send('Main Page!')
})


app.put('/', (req, res) => {
    res.send('Main Page!')
})

app.delete('/', (req, res) => {
    res.send('Main Page!')
})
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/bye', (reg, res) => {
    res.send('Bye World!')
})


app.get('/users', (req, res) => {
    res.send('My user page was created. Awesome')
})


app.get('/awesome', (req, res) => {
    res.send('This is an awesome test')
})

app.listen(3000, () => console.log('listening on PORT 3000, test'))
