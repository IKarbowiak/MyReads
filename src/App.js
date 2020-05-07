import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'


class BooksApp extends React.Component {
  state = {
    shelves: []
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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks shelves={this.state.shelves} />
        )} />
        <Route path='/search' component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
