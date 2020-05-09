import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


const ListBooks = (props) => {
  const {shelves, bookUpdate} = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
          {Object.keys(shelves).map((shelfName) => (
              <div key={shelfName}>
                <BookShelf
                  shelfName={shelfName}
                  books={shelves[shelfName]}
                  bookUpdate={bookUpdate}
                />
              </div>
            ))
          }
      </div>
      <div className="open-search">
        <Link className="open-search-link" to="/search">Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  shelves: PropTypes.object.isRequired,
  bookUpdate: PropTypes.func.isRequired
};

export default ListBooks
