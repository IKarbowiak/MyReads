import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const fromCamelCase = (str, separator=" ") => {
  const formattedStr = str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .toLowerCase()
  return formattedStr.charAt(0).toUpperCase() + formattedStr.slice(1)
}

const BookShelf = (props) => {
  const {shelfName, books, bookUpdate} = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{fromCamelCase(shelfName)}</h2>
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} bookUpdate={bookUpdate}/>
          </li>
        ))}
      </ol>
    </div>
  )
}

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  bookUpdate: PropTypes.func.isRequired,
}

export default BookShelf
