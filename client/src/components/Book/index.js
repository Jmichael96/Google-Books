import React from "react";
import { ListItem } from "../List";
import { MDBRow, MDBCol } from 'mdbreact';
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <div id="bookWrap">
    <ListItem>
      <MDBRow id="row" className="flex-wrap-reverse">
        <MDBCol size="md-8">
          <h3 id="bookTitle">{title}</h3>
          {subtitle && <h5 id="bookSubtitle" className="font-italic">{subtitle}</h5>}
        </MDBCol>
        <MDBCol size="md-4">
          <div className="btn-container">
            <a className="btn" id="viewSiteBtn" target="_blank" rel="noopener noreferrer" href={link}>
              View Site
            </a>
            <Button />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="12" sm="2">
          <img id="bookImage" src={image} alt={title} />
        </MDBCol>
        <MDBCol size="12" sm="10">
          <p id="bookDesc">{description}</p>
        </MDBCol>
      </MDBRow>
    </ListItem>
    </div>
  );
}

export default Book;