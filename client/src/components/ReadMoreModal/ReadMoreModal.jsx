import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter
} from 'mdbreact';
import isEmpty from '../../utils/isEmpty';

import './readMoreModal.css';

const ReadMoreModal = ({ title, summary, isOpen, modalController }) => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setModal(true);
        } else {
            setModal(false);
        }
    }, [isOpen]);

    return (
        <section id="modalSection">
            <MDBModal id="modalSection" isOpen={modal} backdrop={false} >
                <MDBModalHeader>{!isEmpty(title) && <h3>{title}</h3>}</MDBModalHeader>
                <MDBModalBody>
                    {!isEmpty(summary) && <p>{summary}</p>}
                </MDBModalBody>
                <MDBModalFooter>
                    <span id="closeModalBtn" onClick={() => modalController()}>CLOSE</span>
                </MDBModalFooter>
            </MDBModal>
        </section>
    )
}

ReadMoreModal.propTypes = {
    summary: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    modalController: PropTypes.func.isRequired,
}

export default ReadMoreModal;