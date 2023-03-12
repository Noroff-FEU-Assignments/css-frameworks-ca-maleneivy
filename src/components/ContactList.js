import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneFlip, faLocationDot } from '@fortawesome/free-solid-svg-icons'


function ContactList() {
    return (
        <Col lg={6} sm={12}>
            <Row>
                <Col>
                    <FontAwesomeIcon icon={faEnvelope} /> hello@yay.com
                </Col>
            </Row>

            <Row>
                <Col>
                    <FontAwesomeIcon icon={faPhoneFlip} /> 123 456 7890
                </Col>
            </Row>

            <Row>
                <Col>
                    <FontAwesomeIcon icon={faLocationDot} />
                    123 Some Street
                    <br></br>
                    Somewhere
                    <br></br>
                    Some City
                    <br></br>
                    10000
                </Col>
            </Row>

        </Col>
    )
}

export default ContactList