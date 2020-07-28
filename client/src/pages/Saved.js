import React, { Component } from 'react';
import Card from '../components/Card';
import Book from '../components/Book/Book.jsx';
import API from '../utils/API';
import {
  MDBRow,
  MDBContainer,
  MDBCol
} from 'mdbreact';

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
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12" sm="12">
            <h2 id="savedTitle" className="text-center">Your Saved Books</h2>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <div>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          id="deleteBookBtn"
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn ml-2"
                        >
                          Delete Book
                        </button>
                      )}
                    />
                  ))}
                </div>
              ) : (
                  <h2 className="text-center">No Saved Books</h2>
                )}
            </Card>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Saved;