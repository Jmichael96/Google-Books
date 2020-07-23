import React, { Component } from "react";
import Form from "../components/Form";
import Book from "../components/Book";
import API from "../utils/API";
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBCard,
} from 'mdbreact';
import { List } from '../components/List/index'

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

  handleBookSave = id => {
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

  render() {
    return (
      <MDBContainer>
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          query={this.state.query}
        />
        <MDBRow>
          <MDBCol size="md-12">
            <MDBCard id="bookCard" title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          id="saveBtn"
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 id="bookMessage" className="text-center">{this.state.message}</h2>
                )}
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Home;