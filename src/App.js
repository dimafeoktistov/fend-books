import React from 'react';
import * as BooksAPI from './components/BooksAPI';
import ShelfBox from './components/ShelfBox.js';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SearchPage from './components/SearchPage.js';
import Header from './components/Header.js';
import './App.css';

class BooksApp extends React.Component {
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
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header />
              <ShelfBox
                books={this.state.books}
                shelfes={this.state.shelfes}
                moveBook={this.moveBook}
              />

              <div className="open-search">
                <Link to="/search"> Add a book </Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

// <Route
//   path="/search"
//   render={({ history }) => (
//     <div>
//       <Header />
//       <SearchPage />
//     </div>
//   )}
// />

export default BooksApp;
