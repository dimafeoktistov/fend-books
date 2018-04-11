import React from 'react';

function Book(props) {
  const { title, authors, shelf } = props.book;
  const handleShelfChange = shelfChange => {
    props.onMoveBook(props.book, shelfChange);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url( ${props.book.imageLinks.smallThumbnail} )`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={event => handleShelfChange(event.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              {props.shelf.map((shelf, index) => (
                <option value={shelf.flag} key={index}>
                  {' '}
                  {shelf.shelf}{' '}
                </option>
              ))}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title"> {title} </div>
        <div className="book-authors"> {authors} </div>
      </div>
    </li>
  );
}

export default Book;
