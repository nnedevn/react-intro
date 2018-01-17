import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h3>by {this.props.author}</h3>
        <p>{this.props.body}</p>
        <div>{this.props.comments[0]}</div>
      </div>
    );
  }
}

export default Post;
