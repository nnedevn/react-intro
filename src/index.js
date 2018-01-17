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
let authors = [{
  name: 'Stealthy Stedosaurus'
},{
  name: 'Tiny Rex'
},{
  name: 'Massive Mastodon'
},{
  name: 'Rapping Raptor'
}];

ReactDOM.render(<Post
  allAuthors={authors}
  title={post.title}
  author={post.author}
  body={post.body}
  comments={post.comments} />, document.getElementById('root'));
registerServiceWorker();
