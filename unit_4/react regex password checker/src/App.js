import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      passSec: 'empty',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  passwordCheck(password){
    
      if (/(?=.*[!@#\$%\^&\*])(?=.*[0-9])(?=.*[A-Z])(?=.{14,})/.test(password) === true){
        return 'great'
      } else if (/(?=.*[0-9])(?=.*[A-Z])(?=.{8,})/.test(password) === true || /(?=.*[!@#\$%\^&\*])(?=.*[A-Z])(?=.{8,})/.test(password) === true ){
        return 'good'
      } else if (/(?=.*[A-Z])(?=.{8,})/.test(password) === true) {
        return 'ok'
      } else {
        return 'bad'
      }
  }
  
  handleChange(event) {
    const password_check = this.passwordCheck(event.target.value)
    this.setState({
      input: event.target.value,
      passSec: password_check
    })
  }
  
  
  render() {
    const passwordSatisfaction = {
      empty: '😶',
      bad: '😕',
      ok: '😐',
      good: '🙂',
      great: '😎'
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
        <form action="">
          <input
            type="password"
            value={this.state.input}
            onChange={this.handleChange}
          />
          {passwordSatisfaction[this.state.passSec]}
          <p>
            {this.state.input}
          </p>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
