import React, {Component} from 'react';

class Author extends Component {
  render (){
    return (
     <div>{this.props.allAuthors.map(author => <p>{author}</p>)}</div>
    )
  }
}

export default Author