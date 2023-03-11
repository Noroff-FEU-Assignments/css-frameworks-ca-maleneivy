import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function ContactList() {
    return (
        <Col lg={6} sm={12} >
            <Row>1</Row>
            <Row>2</Row>
            <Row><FontAwesomeIcon icon={faEnvelope} /></Row>
        </Col>
    )
}

export default ContactList