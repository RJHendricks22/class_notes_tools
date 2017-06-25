import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetching: true,
      tasks: [],
      new_task: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  componentWillMount(){
    fetch("http://mtastat.us/api/trains").then( res => res.json() ).then( res => console.log(res));
    const newTasks = [
      {task:"finish homework", done: false},
      {task: "feed the cat", done: true},
      {task: "clean up alien bodies", done: false},
      {task: "muster up courage to stand up to Summer", done: false}
    ];
    const currentTasks = this.state.tasks;
    this.setState({
      tasks: currentTasks.concat(newTasks)
    });
  };
  renderToDoItems(){
    const toDoItems = this.state.tasks;
    return toDoItems.map( (task, index) => {
      return(
        <div key={index}>
          <li style={{color: task.done? "green" : "red"}}> {task.task} </li>
          <input type="checkbox" checked={task.done} onChange={ ()=> this.updateCheckbox(index)} />
        </div>
      )
    });
  };
  updateCheckbox(i){
    let allTasks = this.state.tasks; 
    let selectedTask = allTasks[i];
    if (selectedTask.done === false ) {
      selectedTask.done = true
    } else {
      selectedTask.done = false
    };
    allTasks[i] = selectedTask;
    this.setState({
      tasks: allTasks
    });
  };
  handleChange(event){
    this.setState({
      new_task: event.target.value
    });
  };
  handleSubmit(event){
    const newTask = this.state.new_task; 
    const currentTasks = this.state.tasks; 
    currentTasks.push({task: newTask, done: false});
    this.setState({
      tasks: currentTasks,
      new_task: ''
    });
    event.preventDefault();
  };
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <h3>Create a new to-do item!</h3>
        <div>
          <ul>
            { this.renderToDoItems()} 
          </ul>
        </div>
        <div>
          <form onSubmit={ this.handleSubmit }>
            <input type="text" value={this.state.new_task} onChange={this.handleChange}/>
            <button type="submit">Add To Do To List</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
