import React, { Component } from 'react';
import Shelf from './Shelf.js';
import * as BooksAPI from './BooksAPI';

class ShelfBox extends Component {
  state = {
    books: [],
    shelfes: [
      {
        flag: 'currentlyReading',
        shelf: 'Currently Reading'
      },
      {
        flag: 'wantToRead',
        shelf: 'Want To Read'
      },
      {
        flag: 'read',
        shelf: 'Read'
      }
    ]
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      console.log('books', this.state.books);
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  render() {
    const { books, shelfes } = this.state;

    return (
      <div className="list-books-content">
        <Shelf books={books} shelfes={shelfes} onMoveBook={this.moveBook} />
      </div>
    );
  }
}

export default ShelfBox;
