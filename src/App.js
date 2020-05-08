import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'


class BooksApp extends React.Component {
  state = {
    shelves: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      const shelves = {};
      console.log('shelves', shelves);
      books.forEach(book => {
        if (book.shelf in shelves){
          shelves[book.shelf].push(book)
        } else {
          shelves[book.shelf] = [book]
        }
      });
      this.setState(() => ({
        shelves
      }))
    })
  }

  bookUpdate = (book, newShelf) => {
    const bookShelf = book.shelf
    book.shelf = newShelf !== "none" ? newShelf : undefined
    BooksAPI.update(book, newShelf)
    this.setState((currentState) => ({
      shelves: {
        ...currentState.shelves,
        [bookShelf]: currentState.shelves[bookShelf].filter(b => b.id !== book.id),
        [newShelf]: newShelf === "none" ? [...currentState.shelves[newShelf]] : [...currentState.shelves[newShelf], book]
      }
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks shelves={this.state.shelves} bookUpdate={this.bookUpdate}/>
        )} />
        <Route path='/search' render={() => (
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
