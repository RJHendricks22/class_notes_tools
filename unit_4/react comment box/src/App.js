import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './components/commentbox'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="header">This is a header</h1>
        <CommentBox />
        
      </div>
    );
  }
}

export default App;
