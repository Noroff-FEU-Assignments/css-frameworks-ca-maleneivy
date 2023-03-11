import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneFlip, faLocationDot } from '@fortawesome/free-solid-svg-icons'


function ContactList() {
    return (
        <Col lg={6} sm={12} >
            <Row>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} /> hello@yay.com
                </div>
            </Row>

            <Row>
                <div>
                    <FontAwesomeIcon icon={faPhoneFlip} /> 123 456 7890
                </div>
            </Row>

            <Row>
                <div>
                    <FontAwesomeIcon icon={faLocationDot} />
                    123 Some Street
                    Somewhere
                    Some City
                    10000
                </div>
            </Row>

        </Col>
    )
}

export default ContactList