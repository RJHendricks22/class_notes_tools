## Netflixatorium

![](https://media.giphy.com/media/56vLtntOmVfvG/giphy.gif)

You've booked a new client who is really big, and really struggling: Netflix.
It turns out pioneering a streaming video service is great, right until everyone else joins in.
They're betting it all on a crazy, new product: what if, instead of sitting at home, watching shows on a tiny screen, you had a place where you could go with friends to watch stuff?
And maybe the screen isn't tiny: it's huge!
And you could buy snacks, and instead of being paralyzed by infinite choice, you got a curated listed of movies you could watch.
They call it a "Netflixatorium", and they want you to build an interface for it.

What will power that interface? Ajax: [**AJAX**. Click here for some documentation of AJAX GET with jQuery!](https://api.jquery.com/jquery.get/). [More documentation for jQuery AJAX in general](http://api.jquery.com/jquery.ajax/). Be sure to look at this when you run into issues with AJAX.

The Netflixatorium managers wants to be able to manage the website on his own. He'll be able to search for a movie and add it to his list of movies currently playing at the Netflixatorium.

To do this, we'll be getting data from the Open Movie Database (OMDB) using AJAX.

We'll use the data AJAX returns to dynamically change the page with DOM manipulation and play with a CSS framework similar to Bootstrap, called Skeleton, for our styling.

## Set Up

Starter code has been provided. Work in the `script.js` file. You will need to add jQuery to your project directory and link it to your html file.

## Completion

There are four functions in the JavaScript. Aim to complete all four. There are bonuses to tackle afterwards! As always - More is better, healthy living is best.

## Assignment

There are four functions

* getData should take an input of a movieTitle, and **RETURN** an **AJAX GET** to `"http://www.omdbapi.com/?t=" + MOVIE-TITLE + "&r=json"`  
    Try printing the return data in console and seeing what the data looks like. Be sure to save this value in a variable, you'll want to pass it in to another function later.

* addAJAXFunction is a listener on the submit button. This function uses the **movie input element's value** (which should be a movie title!) and **invokes getData** with the movie title. When getData is **SUCCESSFUL**, it should invoke handleResponse and pass in the movie data.

* handleResponse should take an input of data, parse through it to isolate the movie name and the image path, and invokes appendMovie to create an element.

* appendMovie takes two inputs, `name` and `imagePath`, and creates a series of elements that fit into the scheme of the HTML. Checkout the movie that is hard coded in the HTML file to see how this should be done. There is already an example of what this looks like in the HTML!


## Bonus

* Consider how the `GET` url uses the name of the movie. One word movie title work effortlessly, but what about long tiles? Play around with the input string when the movie has multiple words. How can you make sure the url won't have any spaces? Figure out a way to correctly search for the movie "Jay and Silent Bob Strike Back" and successfully return the data. Does it work for "Mad Max 2: The Road Warrior"?

* What happens if you search for something and it doesn't return a legitimate movie? It will still append to the page, and mess up the styling of subsequent movies. Add a conditional so that only searches with good results will append movie information to the page. `HINT` - checkout the `error` method in the jQuery AJAX docs.

* We're using the CSS framework `Skeleton` in this assignment. It's a framework similar to Bootstrap, which we've seen before. Skeleton doesn't quite work perfectly once we surpass twelve columns in a row. We like structure, so add a conditional that will create a new div row, append that to the right element, and then append the new movie when appropriate.
 - checkout the Skeleton Docs [here](http://getskeleton.com/) for reference on how it works (it's pretty simple!)
