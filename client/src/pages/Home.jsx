import React, { Component } from 'react';
import Form from '../components/Form/Form.jsx';
import Book from '../components/Book/Book.jsx';
import API from '../utils/API';
import isEmpty from '../utils/isEmpty';
import Wrapper from '../components/Wrapper/Wrapper.jsx';

import './styles/home.css';


class Home extends Component {
  state = {
    books: [],
    query: "",
    message: ""
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.query)
      .then((res) => {
        this.setState({
          books: res.data,
          message: ''
        });
      })
      .catch(() => {
        this.setState({
          message: 'Unable to search your request. Please try something else.'
        });
        return;
      });
  };


  handleFormSubmit = (e) => {
    e.preventDefault();
    // check if there is query passed in to search
    if (!this.state.query) {
      this.setState({
        message: 'Uh oh... make sure the search field is not empty.'
      })
      return;
    }

    this.getBooks();
  };

  handleBookSave = (id) => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  renderBooks = () => {
    const { books } = this.state;

    if (!isEmpty(books)) {
      return Object.values(books).map((book, i) => {
        return <Book
          key={book.id}
          title={book.volumeInfo.title}
          subtitle={book.volumeInfo.subtitle}
          link={book.volumeInfo.infoLink}
          authors={book.volumeInfo.authors.join(", ")}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.thumbnail}
          Button={() => (
            <span
              onClick={() => this.handleBookSave(book.id)}
              href="#"
            >
              SAVE
            </span>
          )}
        />
      })
    }
  }

  render() {
    return (
      <article>
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          query={this.state.query}
        />
        <Wrapper>
          {isEmpty(this.state.message) ? 
          this.renderBooks()
            : (
              <p id="errMsg">{this.state.message}</p>
            )}
        </Wrapper>
      </article>
    );
  }
}

export default Home;