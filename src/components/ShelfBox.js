import React, { Component } from 'react';
import Shelf from './Shelf.js';
import booksList from './BooksList.js';

class ShelfBox extends Component {
  state = {
    listOfBooks: booksList,
    listOfShelfes: ['Bla-Bla', 'Currently reading', 'Read']
  };
  render() {
    return (
      <div className="list-books-content">
        <Shelf titles={this.state.listOfShelfes} />
      </div>
    );
  }
}

export default ShelfBox;
