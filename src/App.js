import React from 'react';
// import * as BooksAPI from './BooksAPI'
import ShelfBox from './components/ShelfBox.js';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchPage from './components/SearchPage.js';
import Header from './components/Header.js';
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
              <ShelfBox />

              <div className="open-search">
                <Link to="/search"> Add a book </Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <div>
              <Header />
              <SearchPage />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
