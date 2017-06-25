## Task: ##
- Create a stopwatch app in browser using React.
- In terms of functionality, it should have 2 buttons:
  - One is start and pause. It flips between the states.
  - One is reset.

## Before you begin: ##  
  - I have provided you with an incomplete `Stopwatch` app.

## You have options: ##
  - In your `src` directory, there are three components:
    - `StopwatchEasy` - gives you all of the timer code, you have to connect the parts with a setInterval. Allows you to focus on setting state reps.
    - `StopwatchMedium` - gives you most of the timer code, you need to calculate total time elapsed, it will build your string. some logic other than just react required.
    - `StopwatchHard` - gives you none of the timer code. practice all the things.

  - Your `index.js` is missing a `Stopwatch` component to render to the DOM: make sure you `import` whichever file you want to work in.
  - Each one has some code in it to get you started.
  - Challenge yourself. Start with medium or hard  and if you need hints reference easy or medium.

   - This lab is *challenging*. Don't get discouraged, work with someone if you feel stuck. You have all day to work on this- and you'll be provided a solution.   


## Running it/Testing your code: ##
  - While in your working directory run the command `npm start` to start a server that runs on port 3000.
  - Access it at `http://localhost:3000/`
  - Create React App has hot reloading, so your changes should be reflected almost instantly.

## Hints/Spoilers: ##
  - I worked with a few states:
    - `isStart`: true/false wheter it's currently running
    - `total`: how much time was elapsed overall
    - `counter`: this increments while it runs, then adds to elapsed to give the new total elapsed
    - `startTime`: what time it was started
    - `timer`: this is set equal to our setInterval so when we stop the timer, we can clear the variable with clearInterval to stop it.
