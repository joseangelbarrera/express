# ExpressJS



***Application***
app.all()
app.get, app.post(), app.put & app.delete()
app.set() & app.get()
app.param()
app.use()
app.listen()
app.locals w/ moment.js

***Request***
req.body (w/ body-parser)
req.cookies (w/ cookie-parser)
req.hostname, req.ip, req.method
req.params (w/ /user/:name)
req.query (w/ /search?q=tobi+ferret )

***Response***
res.send()
res.json()
res.jsonp()
res.sendFile()
res.cookie()
res.redirect()
res.render()

**express init route:**

* new folder

* create a new package jason empty:
==> npm init --y

* install 'express' with the jason package depency:
==> npm install --save
the dependency will be crate when npm installa was writen

* create -gitignore
==> touch .gitignore

* installa the pug package
==> npm install pug --save


It is usefull to create web server

It creates routes in order to return something from server.

It could be a jason or an html.

nodemon: each time I save or change, the server will be reinitiated.

to install nodemon glabally:

`$ sudo install nodemon -g`

after install it:

`nodemon app.js`

## Hello world example

```
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```

Run the app with the following command:

`$ node app.js


**Express application generator**

Use the application generator tool, express-generator, to quickly create an application skeleton.

The express-generator package installs the express command-line tool. Use the following command to do so:

`$ npm install express-generator -g

[pug](https://pugjs.org/api/getting-started.html)

**Methods:**

* **get** ==> usually lecture mode
* **post** ==> ussualy is to send data to the server from the client (i.e. contat form)

That are the mode we ask for thing to the server
to as same route we can define different things to do with/into the server

* **put** ==> update
* **delete** ==> delete

This methods are usually when we treat with APIs

Those four methods complete the **restfull API**

The API rest: one API is similar to an interface to access to some data (routes that I look into)

By this kind of API each route defines a resource.

For example spotify

/ artist
/album

The group **sum method** + **endpoint** defines the kind of action I want to do.

i.e.

put/movie ==> update movie
delete/movie ==> delete movie


In order to access to server is better idea to use command line.

### software:
curl

command:

curl --help
[See this webpage to mor info
](http://stackoverflow.com/questions/9507353/how-do-i-install-set-up-and-use-curl-on-windows#16216825)

another app into to use into Chrome:
[an Chrome addon](http://stackoverflow.com/questions/9507353/how-do-i-install-set-up-and-use-curl-on-windows#16216825
)
we can amake request to server.


```
press/myfirstproject
$ curl localhost:3000
Main Page!joseangel at MacBook-Pro-de-Jose-Angel in ~/SKYLAB_CODERS/Express/myfirstproject
$ 
```


1º create a project
2º 

....

   install dependencies:
     $ cd . && npm install

   run the app:
     $ DEBUG=mysecondexpressproject:* npm start

to installa all the dependencise into the package jason

'npm install` into the directory
npm start

## -----------------------------

## IMPORTANT : REVISE AT HOME

## -----------------------------


## Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)

Where:

* app is an instance of express.
* METHOD is an HTTP request method, in lowercase.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.

This tutorial assumes that an instance of express named app is created and the server is running. (See the Hello world example).

The following examples illustrate defining simple routes.

Respond with Hello World! on the homepage:

```
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```

Respond to POST request on the root route (/), the application’s home page:

```
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```

Respond to a PUT request to the /user route:

```
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```

Respond to a DELETE request to the /user route:

```
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```


----

inchain actions//

next after app.method... function /
----


the object rest have another methods to inchain 



## Installing

Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

`mkdir myapp`

`cd myapp`
Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

`npm init`
This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:

`entry point: (app.js)`
Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.

Now install Express in the myapp directory and save it in the dependencies list. For example:

`npm install express --save`

To install Express temporarily and not add it to the dependencies list, omit the --save option:

`npm install express`
