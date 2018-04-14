import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults.js';

class SearchPage extends Component {
  state = {
    value: '',
    searchBooks: [],
    shelfBooks: [],
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
    BooksAPI.getAll().then(shelfBooks => this.setState({ shelfBooks }));
  }

  relocateBook = (oldBook, shelf) => {
    let bookToUpdate = this.state.shelfBooks.filter(
      book => book.id === oldBook.id
    );

    bookToUpdate.shelf = shelf;

    this.setState(state => ({
      shelfBooks: state.shelfBooks
        .filter(book => book.id !== oldBook.id)
        .concat(bookToUpdate)
    }));
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    this.searchBook(this.state.value);
  };

  searchBook = value => {
    if (value) {
      BooksAPI.search(value, 20).then(allBooks => {
        if (!allBooks.error && value !== '') {
          this.setState({ searchBooks: allBooks });
        } else if (value === '') {
          this.setState({ searchBooks: [] });
        }
      });
    }
  };

  updateBook = (bookChossen, shelf) => {
    BooksAPI.update(bookChossen, shelf);
    this.relocateBook(bookChossen, shelf);
  };

  render() {
    const { value, searchBooks, shelfBooks, shelfes } = this.state;
    let BooksList = [];

    if (searchBooks.length > 0) {
      BooksList = searchBooks.map(book => {
        let nbook;
        shelfBooks.forEach(shelfBook => {
          if (book.id === shelfBook.id) {
            nbook = shelfBook;
          }
        });
        if (nbook) {
          return nbook;
        } else {
          book.shelf = 'none';
          return book;
        }
      });
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={value}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <SearchResults
              books={BooksList}
              shelfes={shelfes}
              onUpdateBook={this.updateBook}
            />
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
