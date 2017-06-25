import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      color: '#f00'
    }
  }
  
  componentDidMount(){
    this.setState({
      color: "pink"
    })
  }
  
  colorChanger(e){
    this.setState({
      color: e.target.value
    })
  }
  
  render() {
    return (
      <div className="App" style={{height: "400px", width: "800px", background: this.state.color, color: "white"}}>
        <input type="text" onChange={this.colorChanger.bind(this)}></input>
      </div>
    );
  }
}

export default App;
