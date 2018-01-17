import React, { Component } from 'react';
import Author from './Author';

class Authors extends Component {
  render() {
    let allAuthors = this.props.allAuthors.map(author => {
      return <Author singleAuthor={author} />
    });

    return (
      <div className="authors">
        {allAuthors}
      </div>
    )
  }
}

export default Authors