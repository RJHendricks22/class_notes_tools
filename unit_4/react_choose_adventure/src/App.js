import React, { Component } from 'react';
import adventures from './adventures_js';
import Choice from './choice';
import Ending from './ending';

class App extends Component {
  constructor(){
    super();
    this.state = {
      current_adventure: 0,
      adventures
    };
    this.changeAdventure = this.changeAdventure.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  showOptions(data){
    if(data.options){
      return data.options.map(o => {
        return <Choice key={o.label} details={o} changeAdventure={this.changeAdventure}></Choice>
      })
    } else {
      return <Ending ending={data.ending} resetGame={this.resetGame}></Ending>
    }
  }
  changeAdventure(to){
    this.setState({
      current_adventure: to
    })
  }
  
  resetGame(){
    this.setState({
      current_adventure: 0
    })
  }

  render() {
    const data = this.state.adventures[this.state.current_adventure];
    return (
      <div className="main-container" style={{backgroundImage: `url(${data.image})`}}>
        <nav>
          <h1>
            <span className="title">ReactJs</span> Choose Your Own Adventures
          </h1>
        </nav>
        <div className="current-adventure">
          {data.text}
        </div>
        <div className="choices">
          {this.showOptions(data)}
        </div>
      </div>
    );
  }
}

export default App;
