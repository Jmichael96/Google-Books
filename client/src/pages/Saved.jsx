import React, { Component } from 'react';
import Book from '../components/Book/Book.jsx';
import API from '../utils/API';
import isEmpty from '../utils/isEmpty';
import Wrapper from '../components/Wrapper/Wrapper';

import './styles/saved.css';

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) => {
        this.setState({
          books: res.data
        });
      })
      .catch(() => {
        return;
      });
  };

  handleBookDelete = (id) => {
    API.deleteBook(id)
      .then(() => {
        this.getSavedBooks();
      })
      .catch(() => {

      });
  };

  renderBooks = () => {
    const { books } = this.state;

    if (isEmpty(books)) {
      return (
        <p className="savedErrMsg">No books are currently saved.</p>
      )
    }
    if (!isEmpty(books)) {
      return Object.values(books).map((book) => {
        return <Book
          key={book._id}
          title={book.title}
          subtitle={book.subtitle}
          link={book.link}
          authors={book.authors.join(", ")}
          description={book.description}
          image={book.image}
          Button={() => (
            <span
              onClick={() => this.handleBookDelete(book._id)}
              href="#"
            >
              DELETE
            </span>
          )}
        />
      });
    }
  }

  render() {
    return (
      <article>
        <h2 id="savedTitle">SAVED LIBRARY</h2>
        <Wrapper>
          {this.renderBooks()}
        </Wrapper>
      </article>
    );
  }
}

export default Saved;