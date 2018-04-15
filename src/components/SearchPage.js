import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI.js';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults.js';

class SearchPage extends Component {
  state = {
    value: '',
    searchBooks: []
  };

  handleChange = event => {
    let searchTerm = event.target.value;
    if (searchTerm === '') {
      this.setState({
        value: '',
        searchBooks: []
      });
    } else {
      this.setState({
        value: searchTerm
      });
      this.searchBook(searchTerm);
    }
  };

  searchBook = value => {
    if (value) {
      BooksAPI.search(value, 20).then(allBooks => {
        if (!allBooks.error && value !== '') {
          this.setState({ searchBooks: allBooks });
        } else if (value === '') {
          this.setState({ searchBooks: [] });
        } else if ({ searchBooks: [] }) {
          this.setState({ searchBooks: [] });
        }
      });
    }
  };

  render() {
    const { value, searchBooks } = this.state;
    let booksList = [];

    if (searchBooks.length > 0) {
      booksList = searchBooks.map(book => {
        let nbook;
        this.props.books.forEach(shelfBook => {
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
              books={booksList}
              shelfes={this.props.shelfes}
              onMoveBook={this.props.moveBook}
            />
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
