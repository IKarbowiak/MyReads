import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchBooks extends Component {
  static propTypes = {
    bookUpdate: PropTypes.func.isRequired,
    shelves: PropTypes.object.isRequired,
  };

  state = {
    searchValue: "",
    books: []
  };

  searchHandler = (event) => {
    const value = event.target.value
    this.setState({
      searchValue: value
    })
    if (value) {
      BooksAPI.search(value).then((books) => {
        if (!('error' in books)) {
          const booksWithShelves = this.setBooksShelves(books)
          this.setState({
            books: booksWithShelves
          })
        }
      })
    } else {
      this.setState({
        books: []
      })
    }
  }

  setBooksShelves = (books) => {
    let shelf_name = undefined
    const shelves = this.props.shelves
    books.forEach(book => {
      shelf_name = undefined
      Object.keys(shelves).forEach(shelf => {
        if (shelves[shelf].some(b => b.id === book.id)){
          shelf_name = shelf
        }
      })
      book.shelf = shelf_name
    })
    return books
  }

  render() {
    const {bookUpdate} = this.props
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={this.state.searchValue}
            placeholder="Search by title or author"
            onChange={this.searchHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.books.map(book => (
            <li key={book.id}>
              <Book book={book} bookUpdate={bookUpdate}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default SearchBooks
