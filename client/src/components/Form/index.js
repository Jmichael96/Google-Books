import React from 'react';
import './style.css';
import {
  MDBRow,
  MDBCol,
  MDBCardHeader,
  MDBIcon,
  MDBCard,
  MDBContainer,
  MDBCardBody
} from 'mdbreact';
import PropTypes from 'prop-types';

const Form = ({ query, handleInputChange, handleFormSubmit }) => {
  return (
    <form id="searchForm">
      <input
        type="text"
        value={query}
        placeholder="Search for a book"
        name="query"
        onChange={handleInputChange}
        required
      />

      <button
        id="searchBtn"
        onClick={handleFormSubmit}
        type="submit"
      >
        <MDBIcon className="bookIcon" icon="fa fa-book" />
                  SEARCH
      </button>
    </form>
  );
}

Form.propTypes = {
  query: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
}

export default Form;