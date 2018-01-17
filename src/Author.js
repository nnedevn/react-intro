import React, { Component } from 'react';

class Author extends Component {
  render() {
    return (
      <div className="author">
      {console.log(this.props)}
        {this.props.singleAuthor.name}
      </div>
    )
  }
}

export default Author