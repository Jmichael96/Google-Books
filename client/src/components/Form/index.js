import React from "react";
import "./style.css";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search Box"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          id="search-btn"
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;