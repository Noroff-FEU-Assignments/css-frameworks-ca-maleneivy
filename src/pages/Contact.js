import React from 'react'
import Navigation from '../components/Navigation';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import { Form, Button, InputGroup } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <Navigation />
            <Container>
                <Heading content="Submit your details" />

                <Row>
                    <Col lg={6} sm={12} >
                        <Form>
                            <Form.Label>Name</Form.Label>
                            <Form.Control />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Label htmlFor="basic-url">Website</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    https://
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    <Col lg={6} sm={12} >
                        <Row>1</Row>
                        <Row>2</Row>
                        <Row>3</Row>

                    </Col>
                </Row>

            </Container>
        </>

    )
}

export default Contact;