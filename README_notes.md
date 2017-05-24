
req.body (with body-parser)



req.sessionall(set to all methosds at time)



# response
res: are method to response the cliente

res.sen()
res.render
res.json()


# appplication

one methot fior each html method

app.use : it avoid to use middleware


app.loclas it pernmits save methods or variables in order to use further into application (you goes to have available this contet to the pug files)

middlewares

**1º the order is important***

the order of defintion od middlewares are important because this is the order to execution




```
var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(3000)
```

in terminal:

$ curl localhost:3000

Hello World!<br><small>Requested at: 1495011627602</small>joseangel at MacBook-Pro-de-Jose-Angel in ~/SKYLAB_CODERS/Express/middleware

it localhost:3000 web ==>

Hello World!
Requested at: 1495011581086


sessions

1º install the module session

the app.use

The first time an user concet with server, this return a cookie.










