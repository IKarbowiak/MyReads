import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book'


class SearchBooks extends Component {
  state = {
    searchValue: "",
    books: []
  }

  searchHandler = (event) => {
    const value = event.target.value
    this.setState({
      searchValue: value
    })
    if (value) {
      BooksAPI.search(event.target.value).then((books) => {
        console.log('search', books)
        this.setState({
          books: books
        })
      })
    } else {
      this.setState({
        books: []
      })
    }
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
