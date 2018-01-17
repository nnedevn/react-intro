import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Load Comment component
import './Comment';
import Comment from './Comment';


class Post extends Component {
  render() {
    let allComments = [
      <Comment body = {this.props.comments[0]}/>,
      <Comment body = {this.props.comments[1]}/>,
      <Comment body = {this.props.comments[2]}/>
    ]

    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h3>by {this.props.author}</h3>
        <p>{this.props.body}</p>
        <h3>Comments: </h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
