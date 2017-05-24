const express = require("express") // calling express
const app = express() // defining the function
const PORT = 3000 // choosing a PORT (always uppercase)

app.set("view engine", "pug") // defining dependencies
app.use(express.static("public")) // indicating routes

//root directory

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => console.log('listening port 3000'))