import React, { Component } from 'react';

class CommentList extends Component {
    render() {
     let commentNodes = this.props.data.map(comment => {
      return(
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
        )
      })
    return (
      <div className="CommentList">
        <h3>Comments list!</h3>
        
          {commentNodes}
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h3 className="CommentAuthor">
          {this.props.author} says: {this.props.children}
        </h3>
      </div>
    )
  }
}
export default CommentList;
