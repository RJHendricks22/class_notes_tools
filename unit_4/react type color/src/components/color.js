import React, { Component } from 'react';




class Color extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  
  handleCommentSubit(comment){
    let comments = this.state.data;
    let new_comments = comments.concat([comment]);
    this.setState({
      data: new_comments
    })
  }
  render() {
    return (
      <div className="CommentBox">
        <h1>Comments Box!</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}></CommentForm>
      </div>
    );
  }
}

export default CommentBox;
