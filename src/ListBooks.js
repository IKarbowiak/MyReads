import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'


class ListBooks extends Component {
  render() {
    const {shelves} = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            {
              Object.keys(shelves).map((shelf_name) => (
                <div id={shelf_name}>
                  <BookShelf shelf_name={shelf_name} books={shelves[shelf_name]}/>
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
}

export default ListBooks
