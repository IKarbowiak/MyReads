import React, {Component} from 'react'
import Book from './Book'


class BookShelf extends Component {
  render() {
    const {shelf_name, books} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf_name}</h2>
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default BookShelf
