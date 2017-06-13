# Express!

![Imgur](https://media.giphy.com/media/zSVVDJzC7kRoc/giphy.gif)

### Completion:
Completion is parts 1-4. As always, more is better, healthy living is Express.

#### What is express.js?

Express.js is a simple web framework for Node.js.

It's biggest highlights are:

- extremely lightweight/minimalistic (gives you the power to have more control over your application)
- easy to create routes
- very simple to apply middleware (like Mustache)

## Part 1: Setting up Express

1. In your u02_d05_homework directory: `mkdir express-app`
2. `cd express-app`
4. `touch app.js`
3. `npm init` (Hit enter to accept the defaults and see the new [package.json](https://docs.npmjs.com/cli/init) file
4. `npm install express --save` (The `--save` option adds the module as a dependency in your package.json file. This allows anyone looking at your app (i.e. a dev team member) to be able to see what your app is "made of" and if they clone your app and run `npm i` all dependencies will be installed. This is similar to a gem but you can see it!)



If you look at the package.json file, Express should be included as a dependency:

```json
"dependencies": {
  "express": "^4.14.0"
}
```

Let's start coding in `app.js`:

```javascript
// app.js

var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;

app.listen(port);
console.log('Server listening on port:' + port);
```
Let's run:
```bash
node app.js
```

Navigate to `http://localhost:3000` and you should see something logged to your Node console!

## Part 2: Routing in Express

Let's look at routes and handler callback functions in Express routes:
First, create a `public` directory and, inside `public`, make `index.html` and `style.css` files. Add a little bit of content so that, when we launch the server, we can test and see if `index.html` is being served out correctly.


Now, in `app.js`, add the following:
```javascript
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('index');
});
```

Routes in Express are created using methods named after HTTP verbs --usually GET or POST.

In the example above, we created a route to respond to GET requests at the root of the app (the root is almost always located at `'/'`).

Your Express app is, essentially, an object of functions bundled together, with an `app.get` route for each component of your app.  In this example, we'll send back the `index.html` view as a response, with :
```javascript
 res.send('index')
 ```

## Part 3: Creating API Routes

Not only are we able to easily send html files to the browser with Express, we can also serve JSON like an API!

For this sections, let's test our routes with [Postman](https://www.getpostman.com/).

1. Take the following JS object, create a variable named `npmPackages`, and assign it to the following:
```
{

    title: "Popular NPM Frameworks",
    text: "These are the most popular frameworks",

    packages: [
      {
        name: "Express",
        category: "Server-side Framework",
        img: "https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
      },
      {
        name: "Gulp",
        category: "Build System",
        img: "http://maxcdn.webappers.com/img/2014/01/gulp-js.jpg"
      },
      {
        name: "Mocha",
        category: "Testing Framework",
        img: "https://s3.amazonaws.com/dailyjs/images/posts/mocha-tests.png"
      },
      {
        name: "React",
        category: "Front-end Framework",
        img: "http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
      },
      {
        name: "Passport",
        category: "Authentication Tool",
        img: "https://pbs.twimg.com/profile_images/599259952574693376/DMrPoJtc.png"
      },
      {
        name: "PG Promise",
        category: "Promises Interface for PostgeSQL Database",
        img: "https://securedb.co/wp-content/uploads/2015/07/worlds-most-advanced-open-source-database-securedb-encyrption-as-a-service.gif"
      }
    ]
}
```

2. Create a second route in your server file. We will respond to requests at this route with the npmPackages object. Your set up should look something like:
```javascript
app.get('/api/npmPackages', function(req, res) {
  var json_data = npmPackages;
  res.json(json_data);
});
```
(res.json is an alternative to res.send or res.render -- all it does is send out your data as JSON.)

3. Alright, now spin your server up and go to `localhost:3000`. You should still see your html from the `index.html` file. Using Postman, test out your new route! (get -> localhost:3000/api/npmPackages).

You should see the npmPackages object sent as a response to your request.

## Part 4: Hitting our API Route
For this section, add a `script.js` to your public folder. You'll also need to include jQuery in your public directory. Make sure you download jQuery, and link both in your html file.

In `script.js`, write an AJAX function that sends a get request to "/api/npmPackages".
- console.log the data you get back. Does it look like what you expect?

Now, take that object and append everything to the page.
- Append an h1 to the page with the title
- Append an h3 to the page with the text
- For each package in the `packages` array, create a new div, an h5 for the name, a p for the category, and use the image url for an img tag.
- Have the new data append to the DOM when the page loads.

# BONUS
Create a new object in your server file with the variable name `languages`. Make an array of objects inside `languages`. Each object should have a name, an image, and a description.

Add a language object for the following: (you'll need to find your own description and image for each language)
 - javascript
 - ruby
 - golang
 - elm
 - elixir

Create an API route to serve JSON data (the languages object) when the server receives a GET request for "/api/languages".

In your `index.html` file, add a button with the text languages. This button should fire another AJAX call to your new route, and append all the language data to the page.

Style your page and figure out a way to handle errors in your AJAX function!
