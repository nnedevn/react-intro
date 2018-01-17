import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Load Comment component
import './Comment';
import Comment from './Comment';
import Authors from './Authors';

class Post extends Component {
  render() {
    let allComments = this.props.comments.map(comment => {
      return <Comment key={this.props.comments.indexOf(comment)} body={comment} />
    });
    
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Authors allAuthors={this.props.allAuthors} />
        <p>{this.props.body}</p>
        <h3>Comments: </h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
