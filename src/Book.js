import React, {Component} from 'react'
import PropTypes from 'prop-types'


class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookUpdate: PropTypes.func.isRequired,
  }

  state = {
    value: this.props.book.shelf || "none"
  }

  handleChange = (event) => {
    event.preventDefault()
    const value = event.target.value
    this.props.bookUpdate(this.props.book, value)
    this.setState({
      value: value
    })
  }

  render() {
    const {book} = this.props
    const imageUrl = book.imageLinks !== undefined ? `url(${book.imageLinks.smallThumbnail})` : ''
    return (
      <div className="book">
      <div className="book-top">
        <div
          className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageUrl }}></div>
        <div className="book-shelf-changer">
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors !== undefined ? book.authors.join(", ") : ""}</div>
    </div>
    )
  }
}

export default Book