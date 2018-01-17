import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

let post = {
  title: 'Dinosaurs are awesome',
  author: 'Stealthy Stegosaurus',
  body: 'Large',
  comments: ['First', 'Second', 'Tertiary']
}

ReactDOM.render(<Post 
  title = {post.title}
  author = {post.author}
  body = {post.body}
  comments = {post.comments} />, document.getElementById('root'));
registerServiceWorker();
