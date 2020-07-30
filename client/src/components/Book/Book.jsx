import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
} from 'mdbreact';
import ReadMoreModal from '../ReadMoreModal/ReadMoreModal';

import './book.css';

const Book = ({ title, authors, link, description, image, Button }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }


  const modalController = () => {
    setOpenModal(!openModal);
  }

  return (
    <article className="bookCard">
      <ReadMoreModal isOpen={openModal} summary={description} title={title} modalController={modalController} />
      <h3 className="bookTitle">{title.replace(/(.{24})..+/, "$1…")}</h3>
      {authors && <p className="font-italic small writtenBy">Written by {authors}</p>}
      <section className="bookMenuWrap">
        <ul className="dropdownContainer">
          <ul className="outerMenu">
            <li
              className="menuListItem"
            >
              <span className="dropdownBtn" onMouseDown={toggleDropdown}> <i className="fas fa-ellipsis-h"></i></span>
              <ul className={`${isOpen ? 'menuData-open' : 'menuData'}`}>
                <li onClick={toggleDropdown}>
                  <Button />
                </li>
                <li onClick={toggleDropdown}>
                  <a target="_blank" rel="noopener noreferrer" href={link}>LINK</a>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </section>
      <MDBRow>
        <MDBCol xs="6" sm="4" md="4" lg="4" className="d-flex justify-content-center">
          <section className="bookImgWrap">
            <img className="bookImg" src={image} alt={title + 'image'} />
          </section>
        </MDBCol>
        <MDBCol xs="6" sm="8" md="8" lg="8">
          <p className="bookSummary" onClick={() => setOpenModal(true)} title="Read more">{description.replace(/(.{200})..+/, "$1…")}</p>
        </MDBCol>
      </MDBRow>
    </article>
  );
}

export default Book;