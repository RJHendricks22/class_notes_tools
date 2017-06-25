import React, { Component } from "react";

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStart: false,
      total: 0,
      timer: undefined,
      startTime: 0,
      counter: 0,
    };
  };
  increment() {
    //this function will keep track of how much time has passed
    //it should set the state for the total variable. it should
    //be called by a setInterval somewhere else in your code.
    var total = Date.now() - this.state.startTime + this.state.counter;
    this.setState({ total: total});
  };
  getTimeSpan(total) {
    //this function should return time as a string. it takes the
    //total time as an argument. you'll have to do math to break
    //up the total time and figure out how many minutes, seconds,
    //and miliseconds have passed, then return a string.
    var minutes = String(Math.floor(total/1000/60) + 100).substring(1);
    var seconds = String(Math.floor((total%(1000*60))/1000) + 100).substring(1);
    var miliseconds = String(total % 1000 + 1000).substring(1);
    return `${minutes}:${seconds}:${miliseconds}`
  };
  startStop() {
    //this function is called when you click the start button.
    //it should check if it's running currently. (check the boolean)
    //Depending on if it is running- you'll need to adjust
    //states and call the increment function.
    if (this.state.isStart === false){ // start
       var timer = setInterval(increment, 1)
      this.setState({
        // your_code
      })
    } else { // stop
      // clearInterval(your_code)
      this.setState({
        // your_code
      })
    }
  };
  reset() {
    //this function should be called when you click the reset button
    //it should clearinterval, and set the appropriate states.
    // clearInterval(your_code)
    this.setState({
      // your_code
    })
  };
  render() {
    return (
      <div>
        <h1>
          {this.getTimeSpan(this.state.total)}
        </h1>
        <button
          onClick={ () => this.startStop() }
          style={ style.button_start }
        >
          { this.state.isStart? "Pause" : "Start" }
        </button>
        <button
          onClick={ () => this.reset() }
          style={style.button_reset}
        >
          Reset!
        </button>
      </div>
    )
  }
}

//this is another way to style. look at the render function
//to understand how this styling is applied.
const style = {
  button_start: {
    fontSize: 20,
    height: 44,
    width: 88,
    margin: 5,
    color: "green",
  },
  button_reset: {
    fontSize: 20,
    height: 44,
    width: 88,
    margin: 5,
    color: "red",
  }
}
