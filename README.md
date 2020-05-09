# MyReads Project

MyReads is project for Udacity's React Fundamentals course, which tracking books.
Books can be in three different shelves: *currently reading*, *read* and *want be read*.
The app allow moving books from shelf to shelf, removing book from any shelf and also
searching for new books and adding them to specific shelf.

## Run app

To run application you need to do two things:

* install all project dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn install`

and that's it!

## Backend Server

Project uses backend server which provide books information.

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
