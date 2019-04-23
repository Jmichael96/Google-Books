import React from "react";
import "./style.css";
import { MDBRow, MDBCol, MDBCardHeader, MDBIcon, MDBCard, MDBContainer, MDBCardBody } from "mdbreact";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="12" sm="3"></MDBCol>
        <MDBCol size="12" sm="6">
          <MDBCard id="searchCard">
            <MDBCardHeader><p><MDBIcon icon="fa fa-book" /> Book Search</p></MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBRow>
                  <MDBCol size="12" sm="8" md="8" lg="8">
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
                  </MDBCol>
                  <MDBCol size="12" sm="2" md="2" lg="2">
                    <div className="">
                      <button
                        id="search-btn"
                        onClick={handleFormSubmit}
                        type="submit"
                        className="btn"
                      >
                        Search
              </button>
                    </div>
                  </MDBCol>
                </MDBRow>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Form;