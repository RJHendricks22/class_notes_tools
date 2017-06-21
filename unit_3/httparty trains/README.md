![](https://cdn.meme.am/instances/500x/71425997.jpg)

Now that you all are Ruby on Rails wizards, let's practice all the things we've learned so far.

# Setup
Create a new rails app in this directory. 

# Completion
Parts 1 - 4 

# Part 1
Generate a controller for `trains`, along with routes to an index, and a show method for `trains`.

# Part 2
Create views in `app/views/trains` for `index` and `show`.

# Part 3
Open your `Gemfile` file.  This is a list of all the gems included in your app. (Rails has a lot prebundled!).
This is where we go to add new gems to our app. Whereas with `npm install`, we used the command line to add node modules to our projects, and those additions were automatically reflected in our `package.json`, we do the inverse with ruby gems. 

To add a gem to a project:
1. Open `Gemfile`
2. Write `gem "httparty"` inside your Gemfile. 
3. Exit, go into root of your app in terminal.
4. Run `bundle install`, which will read your Gemfile & add any recently added gems. 

# Part 4
Once you have installed [HTTParty](https://github.com/jnunemaker/httparty), use it inside of your `def index` method to hit John's [MTA API](https://github.com/johnrbell/mta_do), render the results to your index view. (You may want to call `JSON.parse()` on what you get back to make it more _palatable_.)

# Bonus
Use HTTParty in your `def show` method as well to make a request to the API for just _one_ train, and render those results in the `show` view. 

# Bonus Bonus
Check out [RubyGems](https://rubygems.org/gems) to see what other gems are out there, and see if anything piques your curiosity. 
