import React from 'react'
import Book from './Book'

const fromCamelCase = (str, separator=" ") => {
  const formatted_str = str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .toLowerCase()
  return formatted_str.charAt(0).toUpperCase() + formatted_str.slice(1)
}

const BookShelf = (props) => {
  const {shelf_name, books, bookUpdate} = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{fromCamelCase(shelf_name)}</h2>
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

export default BookShelf
