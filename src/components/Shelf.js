import React from 'react';
import Book from './Book.js';

function Shelf(props) {
  return (
    <div>
      {props.shelfes.map((shelf, index) => (
        <div key={index} id={shelf.flag} className="bookshelf">
          <h2 className="bookshelf-title"> {shelf.shelf} </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.books
                .filter(book => book.shelf === shelf.flag)
                .map(book => (
                  <Book
                    key={book.id}
                    book={book}
                    shelf={props.shelfes}
                    onMoveBook={props.onMoveBook}
                  />
                ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shelf;
