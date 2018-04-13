import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="list-books-title">
      <h1>
        <Link to="/">MyReads</Link>
      </h1>
    </div>
  );
}

export default Header;
