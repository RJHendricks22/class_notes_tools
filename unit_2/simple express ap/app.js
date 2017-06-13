/**** Setup / Configuration *******/
let express = require('express');
let app = express(); // Start an express server called "app"
let port = 3000; // Set what port to listen on

app.listen(port); // Tell our express server to listen on port 3000

// A simple message logged to the console (Terminal) so we know our server is running
console.log('The server has successfully started on port: ' + port); 

/**** Routes *******/

// When we visit: 0.0.0.0:3000
app.get("/", function(request, response){
  let html = '<style>body { background: #ccffcc; font-family: "Helvetica"; color: #f00 }</style><h1>My Cool Site</h1><p>This is the homepage for the Shoebill Gang. We are a bunch of rowdy coders who love Javascript and will love Ruby one day. Check out our page aboot us at <a href="/aboot-us">this link</a>';
  response.send(html);
});

// When we visit: 0.0.0.0:3000/aboot-us
app.get("/aboot-us", function(request, response){
  response.send('<h1>This is a page aboot us.</h1>');
});
