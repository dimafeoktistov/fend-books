import React, { Component } from 'react';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';

class SearchPage extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

export default SearchPage;
