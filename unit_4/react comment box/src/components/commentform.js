import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(){
    super();
    this.state = {
      id: "10",
      author: "",
      text: ""
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onCommentSubmit({
      id: this.state.id,
      author: this.state.author,
      text: this.state.text
    })
    
    this.setState({
      id: ++this.state.id,
      author: "",
      text: ""
    })
  }
  
  handleAuthorChange(e){
    this.setState({
      author: e.target.value
    })
  }
  handleTextChange(e){
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div className="CommentForm">
        <h2>Comments Form!</h2>
        <form className = "CommentForm" onSubmit={this.handleSubmit.bind(this)} >
          <input type="text" placeholder="name" value={this.state.author} onChange={this.handleAuthorChange.bind(this)} ></input><br/>
          <textarea type="text" placeholder="comment" value={this.state.text} onChange={this.handleTextChange.bind(this)} ></textarea><br/>
          <input type="submit" value="add comment"  ></input>
        </form>
      </div>
    );
  }
}

export default CommentForm;
