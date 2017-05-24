// invocamos el express
const express = require("express")
const app = express() // create a instance of express executando express
const PORT = 3000

app.set("view engine", "pug")

// by defoult the engine of render is 'pug'

//root directory

app.get('/', (req, res) => {
    res.render('index')
})


// we want to locate in this place the statics documents
// for that reason the html files must be into this carpet

app.use(express.static("public"))


// render is appllied

app.listen(PORT, () => console.log('listening port 3000'))
