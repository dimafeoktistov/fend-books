import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function SearchResults(props) {
  return (
    <div className="bookshelf">
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <Book
              key={book.id}
              book={book}
              onMoveBook={props.onMoveBook}
              shelf={props.shelfes}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

SearchResults.propTypes = {
  books: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired
};

export default SearchResults;
