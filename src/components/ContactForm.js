import React from 'react'
import { Form, Button, InputGroup, Col } from 'react-bootstrap'

function ContactForm() {
    return (
        <Col lg={6} sm={12} >
            <Form className="formInput">
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
    )
}

export default ContactForm