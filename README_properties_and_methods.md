# Express()

## Methods
express.static()
express.Router()

# Application

The app object conventionally denotes the Express application. Create it by calling the top-level express() function exported by the Express module:
```
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
```

The app object has methods for

* Routing HTTP requests; see for example, app.METHOD and app.param.
* Configuring middleware; see app.route.
* Rendering HTML views; see app.render.
* Registering a template engine; see app.engine.

## Properties
* app.locals
* app.mountpath
## Events
* mount
## Methods
* app.all()
* app.delete()
* app.disable()
* app.disabled()
* app.enable()
* app.enabled()
* app.engine()
**app.get()**
* app.listen()
* app.METHOD()
* app.param()
**app.path()**
**app.post()**
**app.put()**
* app.render()
* app.route()
* app.set()
* app.use()


# Request

The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. It is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.

```
app.get('/user/:id', (req, res) =>  {
  res.send('user ' + req.params.id);
});
```

## Properties
* req.app
* req.baseUrl
* req.body
* req.cookies
* req.fresh
* req.hostname
* req.ip
* req.ips
* req.method
* req.originalUrl
* req.params
* req.path
* req.protocol
* req.query
* req.route
* req.secure
* req.signedCookies
* req.stale
* req.subdomains
* req.xhr

## Methods
* req.accepts()
* req.acceptsCharsets()
* req.acceptsEncodings()
* req.acceptsLanguages()
* req.get()
* req.is()
* req.param()
* req.range()

# Response

The res object represents the HTTP response that an Express app sends when it gets an HTTP request.

```
app.get('/user/:id', (req, res) => {
  res.send('user ' + req.params.id);
});
```


## Properties
* res.app
* res.headersSent
* res.locals

## Methods
* res.append()
* res.attachment()
* res.cookie()
* res.clearCookie()
* res.download()
* res.end()
* res.format()
* res.get()
* res.json()
* res.jsonp()
* res.links()
* res.location()
* res.redirect()
* res.render()
* res.send()
* res.sendFile()
* res.sendStatus()
* res.set()
* res.status()
* res.type()
* res.vary()

# Router

A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions.

You can use it as an argument to app.use()
or as the argument to another router’s use() method.

The top-level express object has a Router() method that creates a new router object.

Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application. For example:

invoked for any requests passed to this router

```
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});
```

will handle any request that ends in /events depends on where the router is "use()'d"

```
router.get('/events', function(req, res, next) {
  // ..
});
```

You can then use a router for a particular root URL in this way separating your routes into files or even mini-apps.

## Methods
* router.all()
* router.METHOD()
* router.param()
* router.route()
* router.use()