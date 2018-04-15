import React, { Component } from 'react';
import Shelf from './Shelf.js';

class ShelfBox extends Component {
  render() {
    return (
      <div className="list-books-content">
        <Shelf
          books={this.props.books}
          shelfes={this.props.shelfes}
          onMoveBook={this.props.moveBook}
        />
      </div>
    );
  }
}

export default ShelfBox;
