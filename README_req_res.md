# Request (req)

## req.params

**This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.**

```
// GET /user/tj
req.params.name
// => "tj"
```

When you use a regular expression for the route definition, capture groups are provided in the array using req.params[n], where n is the nth capture group. This rule is applied to unnamed wild card matches with string routes such as /file/*:

```
// GET /file/javascripts/jquery.js
req.params[0]
// => "javascripts/jquery.js"
```


## req.query

**This property is an object containing a property for each query string parameter in the route. If there is no query string, it is the empty object, {}.**

```
// GET /search?q=tobi+ferret
req.query.q
// => "tobi ferret"

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.qu``ery.order
// => "desc"

req.query.shoe.color
// => "blue"

req.query.shoe.type
// => "converse"
```

## req.body

**Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.**

The following example shows how to use body-parsing middleware to populate req.body.

```
var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
```


## req.session


# Response (res)


## res.send([body])

**Sends the HTTP response. The body parameter can be a Buffer object, a String, an object, or an Array.**

For example:

```
res.send(new Buffer('whoop'));
res.send({ some: 'json' });
res.send('<p>some html</p>');
res.status(404).send('Sorry, we cannot find that!');
res.status(500).send({ error: 'something blew up' });
```

This method performs many useful tasks for simple non-streaming responses: For example, it automatically assigns the Content-Length HTTP response header field (unless previously defined) and provides automatic HEAD and HTTP cache freshness support.

**Whith a buffer object as parameter:** the method sets the Content-Type response header field to “application/octet-stream”, unless previously defined as shown below:
```
res.set('Content-Type', 'text/html');
res.send(new Buffer('<p>some html</p>'));
```

**With string as parameter:** the method sets the Content-Type to “text/html”:
```
res.send('<p>some html</p>');
```

**Whit Array as parameter:** Express responds with the JSON representation:
```
res.send({ user: 'tobi' });
res.send([1,2,3]);
```


## res.render(view [, locals] [, callback])

Renders a view and sends the rendered HTML string to the client. Optional parameters:

* locals, an object whose properties define local variables for the view.
* callback, a callback function. If provided, the method returns both the possible error and rendered string, but does not perform an automated response. When an error occurs, the method invokes next(err) internally.

The view argument is a string that is the file path of the view file to render. This can be an absolute path, or a path relative to the views setting. If the path does not contain a file extension, then the view engine setting determines the file extension. If the path does contain a file extension, then Express will load the module for the specified template engine (via require()) and render it using the loaded module’s __express function.

The local variable cache enables view caching. Set it to true, to cache the view during development; view caching is enabled in production by default.

```
// send the rendered view to the client
res.render('index');

// if a callback is specified, the rendered HTML string has to be sent explicitly
res.render('index', function(err, html) {
  res.send(html);
});

// pass a local variable to the view
res.render('user', { name: 'Tobi' }, function(err, html) {
  // ...
});
```


## res.json([body])

Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

**The parameter can be any JSON type, including object, array, string, Boolean, or number, and you can also use it to convert other values to JSON, such as null, and undefined (although these are technically not valid JSON).**

```
res.json(null);
res.json({ user: 'tobi' });
res.status(500).json({ error: 'message' });
```


# res.redirect([status,] path)

**Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code . If not specified, status defaults to “302 “Found”.**

```
res.redirect('/foo/bar');
res.redirect('http://example.com');
res.redirect(301, 'http://example.com');
res.redirect('../login');
Redirects can be a fully-qualified URL for redirecting to a different site:
```


## res.status(code)

**Sets the HTTP status for the response. It is a chainable alias of Node’s response.statusCode.**

res.status(403).end();
res.status(400).send('Bad Request');
res.status(404).sendFile('/absolute/path/to/404.png');
