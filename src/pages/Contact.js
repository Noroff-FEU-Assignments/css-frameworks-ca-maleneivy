import React from 'react'
import Navigation from '../components/Navigation';
import { Container, Row } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import ContactList from '../components/ContactList';

function Contact() {
    return (
        <>
            <Navigation />
            <Container>
                <Heading content="Submit your details" />

                <Row>
                    <ContactForm />
                    <ContactList />
                </Row>

            </Container>
            <Footer />
        </>

    )
}

export default Contact;