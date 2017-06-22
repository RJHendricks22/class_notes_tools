import React, { Component } from 'react';
import CommentList from './commentlist'
import CommentForm from './commentform'

//Mock API data
const mock_api_data = [
  {id: 1, author: "Bryan", text: "Sux"},
  {id: 2, author: "John", text: "Tarf loves shoebills"},
  {id: 3, author: "Frank", text: "I was streaking through the quad"},
  {id: 4, author: "Bob Marley", text: "One love mon"},
  ]


class CommentBox extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentWillMount(){
    this.setState({
      data: mock_api_data
    })
  }
  handleCommentSubmit(comment){
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
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}></CommentForm>
      </div>
    );
  }
}

export default CommentBox;
