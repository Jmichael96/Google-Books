import React, { Component } from 'react';
import Form from '../components/Form';
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.query)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Name"
        })
      );
  };


  handleFormSubmit = (e) => {
    e.preventDefault();
    // check if there is query passed in to search
    if (!this.state.query) {
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
            <a
              id="saveBtn"
              onClick={() => this.handleBookSave(book.id)}
              href="#"
            >
              SAVE
            </a>
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
        {/* <MDBRow>
          <MDBCol size="md-12">
              
          </MDBCol>
        </MDBRow> */}
        <Wrapper>
          {this.state.books.length ? 
          this.renderBooks()
            : (
              <h2 id="bookMessage" className="text-center">{this.state.message}</h2>
            )}
        </Wrapper>
      </article>
    );
  }
}

export default Home;