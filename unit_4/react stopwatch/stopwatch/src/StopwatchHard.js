import React, { Component } from "react";

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //your code
    };
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
